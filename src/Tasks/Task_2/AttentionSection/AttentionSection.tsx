import React, { useContext } from 'react';
import { LangContext } from '../langContext';

const AttentionSection = () => {
  const { currentDescription } = useContext(LangContext);
  const sectionName = 'attention';
  const { title, subtitle, ctaButton } = currentDescription[sectionName];
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  );
};

export default AttentionSection;
