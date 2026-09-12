export interface Service {
  slug: string;
  title: string;
  excerpt: string;
  icon: string;
}

export const services: Service[] = [
  { slug: 'exam-help', title: 'Exam Help', excerpt: 'We guide you through booking your driving test quickly', icon: '/images/kT7byaQOMC8ukYcN8RKFmmuW8.svg' },
  { slug: 'pick-up-drop-off', title: 'Pick-up & Drop-off', excerpt: 'Easy transport to and from your lessons or driving exam', icon: '/images/iCjwCAp7ajnBfpRrkeirf5X4leA.svg' },
  { slug: 'car-rental-for-exam', title: 'Car Rental for Exam', excerpt: 'Use our certified car for your official driving test day', icon: '/images/D8atNr6pybo3qSWFO0K99VzSk.svg' },
  { slug: 'recovery-lessons', title: 'Recovery Lessons', excerpt: 'Refresh your skills after a break or before reattempting the test', icon: '/images/eJLdTjP6myjWylH1R1lmLthHtQ.svg' },
  { slug: 'test-simulations', title: 'Test Simulations', excerpt: 'Session that mirror the actual driving test to boost your confidence', icon: '/images/0ivr63rjjyr9fawU4OviH6dOYc.svg' },
  { slug: 'parent-guidance', title: 'Parent Guidance', excerpt: 'Support tips for parents to help their teens become confident drivers', icon: '/images/FbFO1nYXPjc7r0srhrFW5XgHYY.svg' },
];
