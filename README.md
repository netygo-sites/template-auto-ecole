# GearUp — port Astro du template Framer

Reproduction pixel-perfect du template Framer **GearUp (Driving School)** en Astro 7,
relevée sur la démo `happier-ferret-030578.framer.app` (styles calculés à 1440 / 1100 / 390 px).
Un exemplaire de chaque **type de page** est reproduit ; les autres fiches se déclinent à partir
des gabarits (voir « Pages »).

## Lancer

```bash
npm install
npm run dev
```

`npm run build` génère le site statique dans `dist/` (`.html` à plat, `trailingSlash: never`).

## Points de rupture du template

| Palier | Largeur | Notes |
|---|---|---|
| Desktop | ≥ 1280 px | conteneur 1210 px (marges 20 px), sections 130 px |
| Tablette | 992 – 1279 px | sections 100 px |
| Mobile | ≤ 991 px | sections 80 px, menu burger |

Les presets typographiques ont leurs propres paliers (992–1279 / 768–991 / ≤ 767) — voir `src/styles/global.css`.

## Structure

| Dossier / fichier | Contenu |
|---|---|
| `src/styles/global.css` | tokens (Crème `#F8F7EC`, Encre `#1F1F1F`, Jaune `#FAB700`, Sable `#E6E5DC`/`#E7E5DC`, Graphite `#545454`, Gris `#AFAFAF`), presets `.t-h1`…`.t-small`, utilitaires (`.hpic`, `.roll`, `.hide-m`/`.show-m`, `.appear`) |
| `src/styles/fonts.css` | 119 `@font-face` Inter / Inter Display (fichiers dans `public/fonts/`) |
| `src/styles/icons.css` | les 26 icônes du template en masques SVG (`.ico.i-<nom>`) |
| `src/styles/richtext.css` | texte riche des fiches CMS |
| `src/layouts/Base.astro` | `<head>`, header, footer, apparition au défilement |
| `src/components/` | `Header` (menu « All Pages », burger), `Footer`, `Button` (libellé qui défile), `ArrowButton` (flèche qui glisse), `Pixels` (angle « pixels »), `IconRow`, `Mosaic`, `HeroCard`, `PageHero`, `CourseCard`, `InstructorCard`, `ServiceCard`, `Faq`, `CtaBand`, `PhotoStrip`, `StepByStep`, `TestiCarousel`, `TestiCards`, `ContactForm`, `Extras` |
| `src/components/home/` | sections de l'accueil (`Hero`, `Intro`, `Courses`, `Why`, `Trusted`, `Instructors`, `Steps`, `Testimonials`, `GalleryCta`) |
| `src/components/about/` | sections de la page About (`AboutHero`, `Numbers`, `Gain`, `FaqSection`) |
| `src/data/` | navigation et coordonnées (`site.ts`), `courses`, `services`, `instructors`, `faq`, `pricing`, contenus des fiches (`courseDetails`, `serviceDetails`, `instructorDetails`) |
| `public/images/` | images du template (noms Framer conservés) · `public/videos/` les deux vidéos |

## Pages

| Route | Type | Gabarit |
|---|---|---|
| `/` | Accueil | `pages/index.astro` |
| `/about-us` | À propos | `pages/about-us.astro` |
| `/courses` · `/services` · `/instructors` | Listes | pages dédiées (sections propres à chacune) |
| `/pricing` · `/faq` · `/contact-us` | Pages simples | pages dédiées |
| `/courses/[slug]` | Fiche cours | exemplaire complet : `defensive-driving` |
| `/services/[slug]` | Fiche service | exemplaire complet : `pick-up-drop-off` |
| `/instructors/[slug]` | Fiche instructeur | exemplaire complet : `jason-miller` |

Les autres fiches (5 cours, 5 services, 5 instructeurs) sont générées avec le même gabarit :
titre, image et accroche viennent des listes de `src/data/`, le corps de texte reprend celui de
l'exemplaire tant que `courseDetails` / `serviceDetails` / `instructorDetails` n'ont pas leur entrée.
La partie **Actus** (liste, article, catégorie) n'est volontairement pas reproduite.

## À brancher

- **Formulaires** (`ContactForm.astro`) : renseigner `action` (Web3Forms, Formspree…).
- **Vidéos** : les deux MP4 du template pèsent 45 Mo et 36 Mo — à recompresser avant mise en ligne.
- Le texte de la démo est conservé tel quel (y compris l'e-mail volontairement erroné `info@examle.com` de la page Contact).
