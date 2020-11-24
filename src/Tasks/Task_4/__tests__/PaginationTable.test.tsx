import React from 'react';
import { render, screen } from '@testing-library/react';
import PaginationTable from '../PaginationTable/PaginationTable';

const mockedUsers = [
  { userId: 1, id: 1, title: 'First user title', body: 'First user body' },
  { userId: 2, id: 2, title: 'Second user title', body: 'Second user body' },
  { userId: 3, id: 3, title: 'Third user title', body: 'Third user body' },
  { userId: 4, id: 4, title: 'Fourth user title', body: 'Fourth user body' },
  { userId: 5, id: 5, title: 'Fifth user title', body: 'Fifth user body' },
];

describe('PaginatedTable component is correct', () => {
  it('if renders appropriately with given props', () => {
    render(<PaginationTable dataEntries={mockedUsers} />);
    const element = screen.getByTestId('users');
    expect(element.childElementCount).toBe(mockedUsers.length);
  });
});
