import React from 'react';
import AttentionSection from './AttentionSection/AttentionSection';
import LangChanger from './LangChanger/LangChanger';
import { LangContextProvider } from './langContext';
import NewsletterSection from './NewsletterSection/NewsletterSection';

const MultilangComponents = () => {
  return (
    <LangContextProvider>
      <LangChanger />
      <AttentionSection />
      <NewsletterSection />
    </LangContextProvider>
  );
};

export default MultilangComponents;
