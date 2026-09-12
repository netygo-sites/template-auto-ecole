/**
 * Contenu des fiches cours. Un seul exemplaire complet (defensive-driving) sert de gabarit :
 * les autres cours réutilisent ce corps de texte tant qu'ils n'ont pas leur propre contenu.
 */
export interface CourseDetail {
  overview: string;
  included: string[];
  audience: string[];
  image: string;
  schedule: string[];
  resume: string;
  startDate: string;
  duration: string;
  price: string;
}

export const courseDetails: Record<string, CourseDetail> = {
  'defensive-driving': {
    overview:
      'Gain the skills and confidence you need to become a safe, responsible driver. This course is designed to take you from the basics of driving to advanced techniques, all at your own pace.',
    included: [
      'Personalized in-car lessons with certified instructors',
      'Theory sessions (online or in-person)',
      'Road test preparation and simulations',
      'Progress tracking and feedback after each lesson',
      'Access to student portal and learning materials',
    ],
    audience: [
      'Beginners with no prior driving experience',
      'Those looking to refresh their skills',
      'Students preparing for their driving test',
      'Nervous drivers who want extra practice and support',
    ],
    image: '/images/7QeAt6Yu6FK9Z49KHKLqitTKbK0.jpg',
    schedule: [
      'Total lessons: 10–20 sessions (based on your needs)',
      'Lesson duration: 60–90 minutes each',
      'Flexible scheduling: weekdays, evenings, and weekends available',
    ],
    resume:
      'The Defensive Driving course teaches you how to stay alert, avoid danger, and make smart decisions on the road. Learn how to keep a safe distance, manage speed, read traffic patterns, and handle sudden situations calmly. This course helps both new and experienced drivers improve focus, reduce risk, and drive with more confidence every day.',
    startDate: 'April 5, 2025',
    duration: '10 lessons, 45 min each',
    price: '$250',
  },
};

export const defaultCourseDetail = courseDetails['defensive-driving'];
