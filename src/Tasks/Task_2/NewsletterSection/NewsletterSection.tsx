import React, { useContext } from 'react';
import { LangContext } from '../langContext';
import { availableSctionName } from '../dataTypes';

const NewsletterSection: React.FC = () => {
  const { currentDescription } = useContext(LangContext);
  const sectionName: availableSctionName = 'newsletter';
  const { title, ctaButton, action } = currentDescription[sectionName];
  return (
    <form action={action}>
      <h1>{title}</h1>
      <button>{ctaButton}</button>
    </form>
  );
};
export default NewsletterSection;
