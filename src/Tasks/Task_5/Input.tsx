import React, { useState } from 'react';
import styles from './Input.module.css';

interface IInputFieldModel {
  idx: number;
  char: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputFieldModel> = ({ char, idx, handleChange }) => {
  const [value, setValue] = useState('');
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
