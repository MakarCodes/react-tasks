import React from 'react';
import { render, screen } from '@testing-library/react';
import AttentionSection from '../AttentionSection/AttentionSection';
import { languageDescriptions } from '../data';

describe('AttentionSection components is ok if', () => {
  it('renders correctly with appropriate default text', () => {
    render(<AttentionSection />);
    Object.values(languageDescriptions.pl.attention).forEach(text => {
      expect(screen.getByText(`${text}`)).toBeInTheDocument();
      expect(screen.getByText(`${text}`)).toHaveTextContent(`${text}`);
    });
  });
});
