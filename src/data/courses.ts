export interface Course {
  slug: string;
  title: string;
  level: string;
  excerpt: string;
  image: string;
}

export const courses: Course[] = [
  {
    slug: 'defensive-driving',
    title: 'Defensive Driving',
    level: 'Advanced',
    excerpt: 'Master the skills to prevent accidents and confidently navigate challenging scenarios',
    image: '/images/Jje0zLtFpVDN0kYFG7MKIdWs0Q.jpg',
  },
  {
    slug: 'teen-driver-course',
    title: 'Teen Driver Course',
    level: 'Beginner',
    excerpt: 'Comprehensive driving lessons designed to build confidence in young drivers',
    image: '/images/OBkZhdEtuHkWpLXVsfvJWKDGE3w.jpg',
  },
  {
    slug: 'first-time-driver',
    title: 'First-Time Driver',
    level: 'Beginner',
    excerpt: 'Essential driving techniques and fundamental traffic regulations for new drivers',
    image: '/images/b2WvlwGPlg6mt0wSgJQPChQnDlI.jpg',
  },
  {
    slug: 'night-driving-skills',
    title: 'Night Driving Skills',
    level: 'Advanced, Intermediate',
    excerpt: 'Enhance your ability to drive safely in low-light and truly adverse weather conditions',
    image: '/images/QwVlSP44ILVUyNJGzj4tqw4I.jpg',
  },
  {
    slug: 'license-test-prep',
    title: 'License Test Prep',
    level: 'Intermediate',
    excerpt: 'Targeted preparation to help you pass your driving test with confidence',
    image: '/images/ZO2JwvZ47UDCq3bnyh0uS1DN9lU.jpg',
  },
  {
    slug: 'manual-car-course',
    title: 'Manual Car Course',
    level: 'Intermediate',
    excerpt: 'Learn smooth clutch control and gear changes for confident manual driving',
    image: '/images/eCPa892oX0zFcRV4dMYOvLjHM0.jpg',
  },
];
