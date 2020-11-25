// odtwórz komponent ze zdjęcia w folderze

// komponent ma działać tak,
// - na podstawie {password} generuje więcej niż password.length inputów jednoznajowych
// - komponent losowo blokuje niektóre inputy na pojedyncze znaki
// - prop onSuccess zostaje wywołany jeśli wszystkie inputy uzupełnione, wraz z literami oraz ich pozycją, które wpisał user

import React, { useState } from 'react';
import styles from './PasswordInput.module.css';
import SingleInput from './SingleInput';

interface IPasswordInput {
  password: string;
  onSuccess: () => void;
}

const MAX_PASSWORD_LENGTH: number = 24;
const generateRandomNumbers = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const PasswordInput: React.FC<IPasswordInput> = ({ password, onSuccess }) => {
  const [allInputs, setAllInputs] = useState(
    [...Array(MAX_PASSWORD_LENGTH)].map(el => null)
  );

  const generateRandomBlockedIdx = () => {
    const passwordLength: number = password.length;
    const numberOfBlockedInputs: number = generateRandomNumbers(
      3,
      passwordLength / 2
    );
    const idxOfBlockedInputs: number[] = [];
    while (idxOfBlockedInputs.length < numberOfBlockedInputs) {
      const blockedIdx = generateRandomNumbers(0, passwordLength);
      if (!idxOfBlockedInputs.includes(blockedIdx)) {
        idxOfBlockedInputs.push(blockedIdx);
      }
    }
    return idxOfBlockedInputs.sort((a, b) => a - b);
  };

  console.log(generateRandomBlockedIdx());

  const passwordInputs = password
    .split('')
    .map(el => <SingleInput char={el} />);

  return (
    <div>
      <div className={styles.InputsContainer}>{passwordInputs}</div>
      <div className={styles.InputsContainer}>
        {allInputs.map(el => (
          <SingleInput char={el} />
        ))}
      </div>
    </div>
  );
};

export default PasswordInput;
