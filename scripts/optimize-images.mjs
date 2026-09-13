/**
 * Redimensionne les images de public/images.
 *
 * Les fichiers viennent des originaux Framer (jusqu'à 7008 x 4672 px, 5,6 Mo pièce).
 * Le site les affiche au maximum sur la largeur du conteneur, soit 1210 px, donc le
 * navigateur décodait des bitmaps géants à chaque défilement : environ 580 mégapixels
 * pour la seule page d'accueil. C'est la cause des à-coups au scroll.
 *
 * On plafonne le plus grand côté à MAX_SIDE. À 2000 px, une image affichée sur toute
 * la largeur du conteneur reste nette sur un écran haute densité, et le poids chute
 * d'environ 95 %. Framer lui-même sert des variantes réduites via son CDN.
 *
 * Les originaux sont copiés dans BACKUP_DIR avant écrasement. Le script est idempotent :
 * une image déjà sous la limite est laissée telle quelle.
 *
 * Usage : node scripts/optimize-images.mjs [--dry]
 */
import { readdir, mkdir, copyFile, stat, writeFile, readFile, access } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';
import sharp from 'sharp';

const SRC_DIR = 'public/images';
// Hors de public/ : ce dossier ne doit ni partir en production ni entrer dans git.
const BACKUP_DIR = '.image-originaux';
const MAX_SIDE = 2000;
const JPEG_QUALITY = 82;
const DRY = process.argv.includes('--dry');

const ko = (n) => (n / 1024).toFixed(0).padStart(6) + ' Ko';

const files = (await readdir(SRC_DIR, { withFileTypes: true }))
  .filter((e) => e.isFile() && /\.(jpe?g|png)$/i.test(e.name))
  .map((e) => e.name)
  .sort();

if (!DRY) await mkdir(BACKUP_DIR, { recursive: true });

let avant = 0;
let apres = 0;
let modifiees = 0;
const lignes = [];

for (const name of files) {
  const src = join(SRC_DIR, name);
  const tailleAvant = (await stat(src)).size;
  avant += tailleAvant;

  // Lu en mémoire : sous Windows, sharp garderait le fichier ouvert et empêcherait
  // de le réécrire au même emplacement.
  const entree = await readFile(src);
  const meta = await sharp(entree).metadata();
  const plusGrandCote = Math.max(meta.width, meta.height);

  if (plusGrandCote <= MAX_SIDE) {
    apres += tailleAvant;
    lignes.push(`  =  ${name}  ${meta.width}x${meta.height}  deja sous la limite`);
    continue;
  }

  if (DRY) {
    apres += tailleAvant;
    lignes.push(`  ~  ${name}  ${meta.width}x${meta.height} -> plafonne a ${MAX_SIDE}`);
    continue;
  }

  // Sauvegarde de l'original avant tout écrasement, sans jamais écraser une
  // sauvegarde existante : sinon un second passage remplacerait l'original par
  // la version déjà réduite.
  const sauvegarde = join(BACKUP_DIR, name);
  const dejaSauve = await access(sauvegarde).then(
    () => true,
    () => false,
  );
  if (!dejaSauve) await copyFile(src, sauvegarde);

  const est = extname(name).toLowerCase();
  const pipeline = sharp(entree)
    .rotate() // applique l'orientation EXIF avant de la perdre
    .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: 'inside', withoutEnlargement: true });

  const buffer =
    est === '.png'
      ? await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer()
      : await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true }).toBuffer();

  await writeFile(src, buffer);

  apres += buffer.length;
  modifiees++;
  const gain = (100 - (buffer.length / tailleAvant) * 100).toFixed(0);
  lignes.push(
    `  ->  ${basename(name)}  ${meta.width}x${meta.height} -> ${MAX_SIDE} max   ${ko(tailleAvant)} -> ${ko(buffer.length)}  (-${gain} %)`,
  );
}

console.log(lignes.join('\n'));
console.log(
  `\n${files.length} fichiers, ${modifiees} redimensionnes.\n` +
    `Total : ${(avant / 1048576).toFixed(1)} Mo -> ${(apres / 1048576).toFixed(1)} Mo ` +
    `(-${(100 - (apres / avant) * 100).toFixed(0)} %)` +
    (DRY ? '\n(simulation, rien ecrit)' : `\nOriginaux sauvegardes dans ${BACKUP_DIR}`),
);
