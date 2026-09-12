/** Contenu des fiches service. Exemplaire complet : pick-up-drop-off (les autres réutilisent ce corps). */
export interface ServiceDetail {
  heading: string;
  intro: string[];
  forTitle: string;
  forList: string[];
  includedTitle: string;
  includedIntro: string;
  included: string[];
  outro: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'pick-up-drop-off': {
    heading: 'Getting to your lesson has never been easier',
    intro: [
      "Each pick-up is arranged around your schedule. We work around your location, availability, and lesson timing, so there's no stress about how to get there, no relying on others, and no arriving flustered before your session even begins. Simply let us know where you are, and we'll handle the rest.",
      'Our pick-up and drop-off service covers lessons, theory sessions, and exam days. Whether you have limited transport or simply want one less thing to think about, we make sure you arrive on time, relaxed, and ready to focus on your driving.',
      'Many students find that removing the hassle of getting to and from lessons helps them show up more consistently and get far more out of every session. Our goal is to make the whole learning experience as smooth and stress-free as possible.',
    ],
    forTitle: 'Perfect for:',
    forList: [
      'Students without access to their own transport',
      'Learners who want a stress-free start to every lesson',
      'Those travelling to and from their official driving exam',
      'Anyone looking to keep their schedule simple and reliable',
    ],
    includedTitle: 'What’s included:',
    includedIntro: 'Each pick-up and drop-off is carefully arranged around your personal schedule, location, and lesson timing. The service may include:',
    included: [
      'Convenient pick-up from your home, school, or workplace',
      'Timely drop-off after every lesson or exam',
      'Flexible scheduling to fit around your availability',
      'Exam day transport so you arrive calm and on time',
      'Friendly, professional service every step of the way',
    ],
    outro:
      "Logistics shouldn't get in the way of learning. Whether public transport is unreliable, your schedule is tight, or you simply want the peace of mind that comes with knowing your ride is sorted, our Pick-up & Drop-off service is here to take that weight off your shoulders. We handle the journey so you can save your focus for what really matters, arriving calm, prepared, and ready to drive your best.",
  },
};

export const defaultServiceDetail = serviceDetails['pick-up-drop-off'];
