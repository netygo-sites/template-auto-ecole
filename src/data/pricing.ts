export interface Plan {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export const plans: Plan[] = [
  {
    name: 'Beginner',
    tagline: 'Perfect for starting your driving',
    price: '$199',
    features: ['5 private lessons', 'Basics of traffic and road rules', 'Introduction to steering', 'Safe start and stop techniques', 'Flexible weekday scheduling'],
  },
  {
    name: 'Confident driver',
    tagline: 'Most popular choice',
    price: '$349',
    popular: true,
    features: ['10 structured driving lessons', 'Full theory and traffic scenarios', 'Mock driving test simulation', 'Real-time feedback', 'Evening and weekend time slots'],
  },
  {
    name: 'Road master',
    tagline: 'Complete training and support',
    price: '$499',
    features: ['15 lessons + 2 private sessions', 'Exam car rental with support', 'Pickup on exam day', 'Advanced parking and practice', 'Personalized tips'],
  },
];
