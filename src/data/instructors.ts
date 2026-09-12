export interface Instructor {
  slug: string;
  name: string;
  role: string;
  image: string;
}

export const instructors: Instructor[] = [
  { slug: 'jason-miller', name: 'Jason Miller', role: 'Senior Driving Instructor', image: '/images/GI1SfLtwd9Jup6IxQi6Yhdlpc.png' },
  { slug: 'sofia-hernandez', name: 'Sofia Hernandez', role: 'Defensive Driving Coach', image: '/images/O3SgJ2qorc3yS0438aRXXflM7To.png' },
  { slug: 'mark-taylor', name: 'Mark Taylor', role: 'Instructor Car Specialist', image: '/images/8dkl3RcHyIckpEOniHsk7p1Byc.png' },
  { slug: 'daniel-reyes', name: 'Daniel Reyes', role: 'Student Coordinator', image: '/images/iq0xDqi6D3QK4pOUTL1aBrByew.png' },
  { slug: 'mia-thompson', name: 'Mia Thompson', role: 'Course Developer', image: '/images/PI0dE5ibPhXtKxRVHP398xMXuc.png' },
  { slug: 'emma-clarkson', name: 'Emma Clarkson', role: 'Driving Instructor', image: '/images/gJ3p7bcPWfavqtIbbk6VjBKQvo.png' },
];
