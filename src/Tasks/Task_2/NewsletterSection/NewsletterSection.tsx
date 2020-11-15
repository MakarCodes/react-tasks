import React, { useContext } from 'react';
import { LangContext } from '../langContext';

const NewsletterSection = () => {
  const { currentDescription } = useContext(LangContext);
  const sectionName = 'newsletter';
  const { title, ctaButton, action } = currentDescription[sectionName];
  return (
    <form action={action}>
      <h1>{title}</h1>
      <button>{ctaButton}</button>
    </form>
  );
};
export default NewsletterSection;
