import React from 'react';
import styles from './SingleInput.module.css';

const SingleInput: React.FC<{ char: string | null }> = ({ char }) => {
  return <span className={styles.SingleInput}>{char}</span>;
};

export default SingleInput;
