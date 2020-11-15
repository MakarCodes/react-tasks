import { IContent } from './dataTypes';

export const pl: IContent = {
  attention: {
    title: 'Dobrze, że jesteś, sprawdź to zadanie',
    subtitle: 'Pomoże Ci ogarnąć jak zmieniać język w apkach reacta',
    ctaButton: 'Dowiedź się więcej',
  },
  newsletter: {
    title: 'Bądź na bieżąco',
    ctaButton: 'Idź do repo ->',
    action: '/new-subscriber?lang=pl',
  },
};
export const en: IContent = {
  attention: {
    title: 'Hey, check this task',
    subtitle: 'It can help You to learn how to change language in react app',
    ctaButton: 'More',
  },
  newsletter: {
    title: "Let's keep in touch",
    ctaButton: 'To repository !!!',
    action: '/new-subscriber?lang=en',
  },
};
