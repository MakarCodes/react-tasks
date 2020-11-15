export type availableLanguages = 'pl' | 'en';
export interface IContent {
  attention: {
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  newsletter: {
    title: string;
    ctaButton: string;
    action: string;
  };
}
export interface LangContextProps {
  userLanguage: availableLanguages;
  currentDescription: IContent;
  languageChangeHandler: (selectedLang: availableLanguages) => void;
}
