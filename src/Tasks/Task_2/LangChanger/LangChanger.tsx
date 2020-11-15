import React, { useContext } from 'react';
import Button from '../Button/Button';
import styles from './LangChanger.module.css';
import flagPLIcon from '../images/Flag_of_Poland.svg';
import flagENIcon from '../images/Flag_of_the_United_Kingdom.svg';
import { LangContext } from '../langContext';

const LangChanger: React.FC = () => {
  const { languageChangeHandler } = useContext(LangContext);
  return (
    <div className={styles.Container}>
      <Button
        icon={flagPLIcon}
        handleClick={() => languageChangeHandler('pl')}
      />
      <Button
        icon={flagENIcon}
        handleClick={() => languageChangeHandler('en')}
      />
    </div>
  );
};

export default LangChanger;
