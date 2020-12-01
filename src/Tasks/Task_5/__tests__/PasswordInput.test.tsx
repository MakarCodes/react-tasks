import React from 'react';
import PasswordInput from '../PasswordInput';
import { render, fireEvent, screen } from '@testing-library/react';
const MAX_PASSWORD_LENGTH: number = 24;

describe('PasswordInput component works correctly if', () => {
  it('renders max number of input fields (24) for given password', () => {
    render(
      <PasswordInput
        password='Password1234'
        onSuccess={() => console.log('Success!')}
      />
    );

    const inputsContainer = screen.getByTestId('inputs-container');
    expect(inputsContainer.childElementCount).toBe(MAX_PASSWORD_LENGTH);
  });
  it('at least half of inputs are blocked', () => {
    render(
      <PasswordInput
        password='Password1234'
        onSuccess={() => console.log('Success!')}
      />
    );
    let counter = 0;
    const inputsContainer = screen.getByTestId('inputs-container');
    inputsContainer.querySelectorAll('input').forEach(input => {
      if (input.disabled === true) {
        counter++;
      }
    });
    expect(counter).toBeGreaterThan(MAX_PASSWORD_LENGTH / 2);
  });

  //check if onSuccess was fired after correct password
});
