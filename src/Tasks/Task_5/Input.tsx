import React, { useState, useEffect } from 'react';
import styles from './Input.module.css';

interface IFieldModel {
  idx: number;
  char: string | null;
  handleChange: any;
}

const Input: React.FC<IFieldModel> = ({ char, idx, handleChange }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <input
      type='input'
      name={idx.toString()}
      disabled={char === null ? true : false}
      value={value}
      onChange={e => {
        setValue(e.target.value);
        handleChange(e);
      }}
      className={
        char === null
          ? styles.SingleInput
          : `${styles.SingleInput} ${styles.SingleInputOpen}`
      }
    />
  );
};

export default Input;
