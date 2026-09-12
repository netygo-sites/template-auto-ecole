export const site = {
  name: 'GearUp',
  title: 'GearUp — Driving School Framer Template',
  description:
    'GearUp is a modern Driving School Framer Template built for instructors and academies. Showcase your driving courses, highlight certified instructors, and build a professional online presence with clean layouts and confident design.',
  phone: '+1 212 425 8617',
  email: 'info@example.com',
  address: '5 Washington Square, New York, USA',
  mapUrl: 'https://maps.app.goo.gl/Hgod3bYHmngji9929',
  socials: [
    { name: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
    { name: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { name: 'X', href: 'https://x.com/', icon: 'x' },
  ],
};

/** Navigation principale (bureau) */
export const nav = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Courses', href: '/courses' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
];

/** Menu déroulant « All Pages » (deux colonnes) */
export const allPages = [
  [
    { label: 'About Us', href: '/about-us' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Services', href: '/services' },
    { label: 'Instructors', href: '/instructors' },
  ],
  [
    { label: 'FAQ', href: '/faq' },
    { label: 'Courses', href: '/courses' },
    { label: 'News', href: '/news' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
];

/** Menu mobile */
export const mobileNav = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Courses', href: '/courses' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Instructors', href: '/instructors' },
  { label: 'FAQ', href: '/faq' },
  { label: 'News', href: '/news' },
];

export const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Instructors', href: '/instructors' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'News', href: '/news' },
    ],
  },
  {
    title: 'Courses',
    links: [
      { label: 'Defensive Driving', href: '/courses/defensive-driving' },
      { label: 'Teen Driver Course', href: '/courses/teen-driver-course' },
      { label: 'First Time Driver', href: '/courses/first-time-driver' },
      { label: 'Night Driving Skills', href: '/courses/night-driving-skills' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Exam Help', href: '/services/exam-help' },
      { label: 'Pick-up & Drop-off', href: '/services/pick-up-drop-off' },
      { label: 'Car Rental for Exam', href: '/services/car-rental-for-exam' },
      { label: 'Recovery Lessons', href: '/services/recovery-lessons' },
    ],
  },
];
