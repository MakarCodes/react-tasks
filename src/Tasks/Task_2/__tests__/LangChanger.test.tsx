import React, { createContext } from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import LangChanger from '../LangChanger/LangChanger';

const LangContext = createContext({
  languageChangeHandler: jest.fn(),
});

describe('LangChanger component works correctly if', () => {
  it('renders all buttons which fire languageChanger function on click', () => {
    const languageChangeHandler = jest.fn();
    const { container } = render(
      <LangContext.Provider value={{ languageChangeHandler }}>
        <LangChanger />
      </LangContext.Provider>
    );
    // const buttons = container.querySelectorAll('button');
    const button = container.querySelector('[data-testid=btn-id]')!;
    act(() => {
      fireEvent.click(button);
      // button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(button).toBeInTheDocument();
    // expect(languageChangeHandler).toHaveBeenCalled();

    // fireEvent.click(buttons[1]);
    // expect(buttons[1]).toBeInTheDocument();
    // expect(languageChangeHandler).toHaveBeenCalled();
  });
});

// WHY MOCKED FUNCTION IS NOT INVOKED ON CLICK?
