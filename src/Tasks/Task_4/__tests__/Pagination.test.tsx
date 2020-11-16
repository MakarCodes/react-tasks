import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination/Pagination';

const randomFn = jest.fn();

const paginationState = {
  actualPageIdx: 1,
  lastPageIdx: 10,
};

const paginationActions = {
  goToFirstPage: randomFn,
  goToPreviousPage: randomFn,
  goToNextPage: randomFn,
  goToLastPage: randomFn,
  goToPage: randomFn,
};
//render - Render into a container which is appended to document.body.
// const { getByTestId } = render(<MyComponent />);
// const { getByText } = within(getByTestId('my-test-id'));
// expect(getByText('some text')).toBeInTheDocument();
//  const firstButton = screen.getByText('GO TO FIRST')

describe('Pagination component works correctly', () => {
  it('if component renders all buttons', () => {
    const { getByText, getByTestId } = render(
      <Pagination
        paginationActions={paginationActions}
        paginationState={paginationState}
      />
    );
    fireEvent.click(getByText('FIRST PAGE'));
    expect(getByText('FIRST PAGE')).toBeInTheDocument();
    expect(paginationActions.goToFirstPage).toHaveBeenCalled();

    fireEvent.click(getByText('LAST PAGE'));
    expect(getByText('LAST PAGE')).toBeInTheDocument();
    expect(paginationActions.goToLastPage).toHaveBeenCalled();

    fireEvent.click(getByTestId('goToPrevPage'));
    expect(getByTestId('goToPrevPage')).toBeInTheDocument();
    expect(paginationActions.goToPreviousPage).toHaveBeenCalled();

    fireEvent.click(getByTestId('goToNextPage'));
    expect(getByTestId('goToNextPage')).toBeInTheDocument();
    expect(paginationActions.goToNextPage).toHaveBeenCalled();

    fireEvent.click(getByTestId('goToPageButtons').firstChild!);
    expect(paginationActions.goToPage).toHaveBeenCalled();
    expect(getByTestId('goToPageButtons')).toBeInTheDocument();
    expect(getByTestId('goToPageButtons').childElementCount).toBe(
      paginationState.lastPageIdx
    );
  });
});
