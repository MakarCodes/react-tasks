import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsletterSection from '../NewsletterSection/NewsletterSection';
import { languageDescriptions } from '../data';

// const getKeyValue = <T extends object, U extends keyof T>(key: U) => (obj: T) =>
//   obj[key];

// https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b

const getKeyValue = function <T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
};

describe('NewsletterSection components is ok if', () => {
  it('renders correctly with appropriate default text', () => {
    render(<NewsletterSection />);
    const descriptionWithText = languageDescriptions.pl.newsletter;
    Object.keys(descriptionWithText).forEach((key: any) => {
      const text = getKeyValue(descriptionWithText, key);
      if (key !== 'action') {
        expect(screen.getByText(`${text}`)).toBeInTheDocument();
        expect(screen.getByText(`${text}`)).toHaveTextContent(`${text}`);
      }
    });
  });
});
