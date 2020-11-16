import React from 'react';
import Button from '../../Task_2/Button/Button';
import styles from './Pagination.module.css';

interface IPaginationProps {
  paginationState: {
    lastPageIdx: number;
    actualPageIdx: number;
  };
  paginationActions: {
    goToFirstPage: () => void;
    goToPrevPage: () => void;
    goToNextPage: () => void;
    goToLastPage: () => void;
    goToPage: (number: number) => void;
  };
}

const Pagination: React.FC<IPaginationProps> = ({
  paginationState,
  paginationActions,
}) => {
  const pagesNumbers: number[] = [];
  for (let i = 1; i <= paginationState.lastPageIdx; i++) {
    pagesNumbers.push(i);
  }

  const pagesToRender = pagesNumbers.map(number => {
    <button key={number} onClick={() => paginationActions.goToPage(number)}>
      {number}
    </button>;
  });
  return (
    <div className={styles.PaginationWrapper}>
      <button onClick={paginationActions.goToFirstPage}>GO TO FIRST</button>
      <button
        onClick={paginationActions.goToPrevPage}
        data-testid='goToPrevPage'
      >
        <i className='fas fa-chevron-left'></i>
      </button>
      <div data-testid='goToPageButtons'>{pagesToRender}</div>
      <button
        onClick={paginationActions.goToNextPage}
        data-testid='goToNextPage'
      >
        <i className='fas fa-chevron-right'></i>
      </button>
      <button onClick={paginationActions.goToLastPage}>GO TO LAST</button>
    </div>
  );
};

export default Pagination;
