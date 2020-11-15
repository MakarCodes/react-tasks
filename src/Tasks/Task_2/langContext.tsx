import React, { createContext, ReactNode, useState } from 'react';
import { pl, en } from './data';

const langs = { pl, en };
const languageOptions = {
  pl: 'pl',
  en: 'en',
};
//The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.
const LangContext = createContext({
  userLanguage: 'pl',
  currentDescription: langs.pl,
  onLanguageChange: (selectedLang: availableLanguages) => {},
});
type availableLanguages = 'pl' | 'en';

const LangContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState<availableLanguages>('pl');

  const x = (selectedLang: availableLanguages) => {
    console.log('working');
    const newLanguage = languageOptions[selectedLang] ? selectedLang : 'pl';
    setUserLanguage(newLanguage);
  };

  const provider = {
    userLanguage,
    currentDescription: langs[userLanguage],
    onLanguageChange: x,
  };

  return (
    <LangContext.Provider value={provider}>{children}</LangContext.Provider>
  );
};

export { LangContextProvider, LangContext };
