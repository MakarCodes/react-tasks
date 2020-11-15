import React, { useContext } from 'react';
import { LangContext } from '../langContext';
import { availableSctionName } from '../dataTypes';

const AttentionSection: React.FC = () => {
  const { currentDescription } = useContext(LangContext);
  const sectionName: availableSctionName = 'attention';
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
