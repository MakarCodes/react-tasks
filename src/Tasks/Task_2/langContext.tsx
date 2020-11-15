import React, { createContext, ReactNode, useState } from 'react';
import { languageDescriptions, languageOptions } from './data';
import { availableLanguages, LangContextProps } from './dataTypes';

//The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them.
const LangContext = createContext({
  userLanguage: 'pl',
  currentDescription: languageDescriptions.pl,
  languageChangeHandler: (selectedLang: availableLanguages) => {},
} as LangContextProps);

const LangContextProvider: React.FC<ReactNode> = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState<availableLanguages>('pl');

  const languageChangeHandler = (selectedLang: availableLanguages) => {
    const newLanguage = languageOptions[selectedLang] ? selectedLang : 'pl';
    setUserLanguage(newLanguage);
  };

  const provider: LangContextProps = {
    userLanguage,
    currentDescription: languageDescriptions[userLanguage],
    languageChangeHandler,
  };

  return (
    <LangContext.Provider value={provider}>{children}</LangContext.Provider>
  );
};

export { LangContextProvider, LangContext };
