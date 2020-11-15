import React, { useContext } from 'react';
import Button from '../Button/Button';
import styles from './LangChanger.module.css';
import flagPLIcon from '../images/Flag_of_Poland.svg';
import flagENIcon from '../images/Flag_of_the_United_Kingdom.svg';
import { LangContext } from '../langContext';

const LangChanger = () => {
  const { onLanguageChange, userLanguage } = useContext(LangContext);
  console.log(onLanguageChange, userLanguage);
  return (
    <div className={styles.Container}>
      <Button icon={flagPLIcon} handleClick={() => onLanguageChange('pl')} />
      <Button icon={flagENIcon} handleClick={() => onLanguageChange('en')} />
    </div>
  );
};

export default LangChanger;
