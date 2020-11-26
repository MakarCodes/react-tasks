// odtwórz komponent ze zdjęcia w folderze

// komponent ma działać tak,
// - na podstawie {password} generuje więcej niż password.length inputów jednoznajowych
// - komponent losowo blokuje niektóre inputy na pojedyncze znaki
// - prop onSuccess zostaje wywołany jeśli wszystkie inputy uzupełnione, wraz z literami oraz ich pozycją, które wpisał user

import React, { useState, useEffect } from 'react';
import styles from './PasswordInput.module.css';
import SingleInput from './SingleInput';

interface IPasswordInput {
  password: string;
  onSuccess: () => void;
}

interface IFieldModel {
  idx: number;
  char: string | null;
}

const MAX_PASSWORD_LENGTH: number = 24;
const generateRandomNumbers = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const PasswordInput: React.FC<IPasswordInput> = ({ password, onSuccess }) => {
  const [allInputs, setAllInputs] = useState<IFieldModel[]>(
    [...Array(MAX_PASSWORD_LENGTH)].map((_, idx) => {
      return { idx: idx, char: null };
    })
  );

  const generateRandomBlockedIdx = () => {
    const passwordLength: number = password.length;
    const numberOfBlockedInputs: number = generateRandomNumbers(
      3,
      Math.ceil(passwordLength / 2)
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

  const convertPasswordToInputDataObj = (
    password: string,
    randomIdxOfInputs: number[]
  ) => {
    return password.split('').map((char, idx) => {
      if (randomIdxOfInputs.includes(idx)) {
        return { idx, char: null };
      }
      return { idx, char };
    });
  };

  useEffect(() => {
    const randomIdxOfInputs: number[] = generateRandomBlockedIdx();
    const arrayWithInputDataObjToDisplay: IFieldModel[] = convertPasswordToInputDataObj(
      password,
      randomIdxOfInputs
    );
    const arrayWithEmptyFields = [
      ...Array(MAX_PASSWORD_LENGTH - password.length),
    ].map((_, idx) => {
      return { idx: password.length + idx, char: null };
    });
    setAllInputs([...arrayWithInputDataObjToDisplay, ...arrayWithEmptyFields]);
  }, []);

  useEffect(() => {
    console.log(allInputs);
  }, [allInputs]);

  return (
    <div>
      <div className={styles.InputsContainer}>
        {allInputs.map(el => (
          <SingleInput char={el.char} />
        ))}
      </div>
    </div>
  );
};

export default PasswordInput;
