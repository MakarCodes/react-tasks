import React from 'react';
import styles from './Button.module.css';
type availableLanguages = 'pl' | 'en';
interface IProps {
  icon: any;
  handleClick: any;
}

const Button: React.FC<IProps> = ({ icon, handleClick }) => {
  return (
    <button className={styles.LangBtn} onClick={handleClick}>
      <img src={icon} className={styles.Icon} alt='Flag icon' />
    </button>
  );
};

export default Button;
