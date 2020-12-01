// odtwórz komponent ze zdjęcia w folderze

// komponent ma działać tak,
// - na podstawie {password} generuje więcej niż password.length inputów jednoznajowych
// - komponent losowo blokuje niektóre inputy na pojedyncze znaki
// - prop onSuccess zostaje wywołany jeśli wszystkie inputy uzupełnione, wraz z literami oraz ich pozycją, które wpisał user

import React, { useState, useEffect } from 'react';
import Input from './Input';
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

interface IUserInputValues {
  [key: string]: string;
}

const MAX_PASSWORD_LENGTH: number = 24;
const generateRandomNumbers = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const PasswordInput: React.FC<IPasswordInput> = ({ password, onSuccess }) => {
  // password validation ? (length between 8-24)
  const [allInputs, setAllInputs] = useState<IFieldModel[]>(
    [...Array(MAX_PASSWORD_LENGTH)].map((_, idx) => {
      return { idx: idx, char: null };
    })
  );
  const [requiredValues, setrequiredValues] = useState<IUserInputValues>({});
  const [userValues, setUserValues] = useState<IUserInputValues>({});

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
    const reqValues: any = allInputs
      .filter(el => el.char !== null)
      .reduce((obj: any, currValue: IFieldModel) => {
        if (currValue.char !== null) {
          const key = currValue.idx.toString();
          const value = currValue.char;
          // return Object.assign(obj, { [key]: value });
          return { ...obj, ...{ [key]: value } };
        }
      }, {});
    setrequiredValues(reqValues);
  }, [allInputs]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(requiredValues);
    console.log(userValues);
    if (JSON.stringify(requiredValues) === JSON.stringify(userValues)) {
      onSuccess();
    } else {
      console.log('Wrong password');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <div>
      {/* <div className={styles.InputsContainer}>
        {allInputs.map(el => (
          <SingleInput char={el.char} key={el.idx} />
        ))}
      </div> */}
      <form onSubmit={handleSubmit}>
        <div className={styles.InputsContainer} data-testid='inputs-container'>
          {allInputs.map(el => (
            <Input
              char={el.char}
              idx={el.idx}
              key={el.idx}
              handleChange={handleChange}
            />
          ))}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default PasswordInput;
