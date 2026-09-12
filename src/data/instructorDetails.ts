/** Contenu des fiches instructeur. Exemplaire complet : jason-miller (les autres réutilisent ce corps). */
export interface InstructorDetail {
  bio: string;
  highlights: string[];
  philosophy: string;
  approachIntro: string;
  approach: string[];
  focusIntro: string;
  focus: string[];
  quote: string;
  results: string;
}

export const instructorDetails: Record<string, InstructorDetail> = {
  'jason-miller': {
    bio: 'Focuses on practical skill-building with a step-by-step approach. Helps students progress with confidence at their own pace.',
    highlights: ['Focus on defensive driving', 'Excellent local road knowledge', 'Supportive and results-driven'],
    philosophy:
      'A senior instructor with years of experience, this instructor believes real skill comes from steady, practical learning. Every lesson is built around helping students grow at their own pace, with the confidence to drive safely long after the test.',
    approachIntro:
      'With a step-by-step teaching style and a calm, steady presence, each session is tailored to where the student is right now, whether brand new or brushing up. What to expect in a typical lesson:',
    approach: [
      'Practical, hands-on skill-building from the ground up',
      'Clear, real-time feedback after every maneuver',
      'A relaxed, pressure-free learning environment',
      'Steady progression built around individual needs',
    ],
    focusIntro:
      'Students benefit from a strong focus on real-world driving skills and local road awareness. This instructor prepares learners for everyday driving, not just the exam. Key strengths include:',
    focus: ['Focus on defensive driving', 'Excellent local road knowledge', 'Supportive and results-driven teaching', 'Test readiness and practical confidence'],
    quote: '"Steady, supportive, and incredibly knowledgeable about local roads. I passed first time and felt ready for every situation!"',
    results:
      'Known for turning hesitant learners into confident drivers, this instructor brings a results-driven approach that students trust. Learners consistently highlight their clear guidance, local expertise, and calm, supportive atmosphere.',
  },
};

export const defaultInstructorDetail = instructorDetails['jason-miller'];
