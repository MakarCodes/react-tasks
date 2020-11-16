import React from 'react';
import styles from './Pagination.module.css';
import { IPaginationActions } from '../dataTypes';
interface IPaginationProps {
  paginationState: {
    lastPageIdx: number;
    actualPageIdx: number;
  };
  paginationActions: IPaginationActions;
}

const Pagination: React.FC<IPaginationProps> = ({
  paginationState,
  paginationActions,
}) => {
  const pagesNumbers: number[] = [];
  for (let i = 1; i <= paginationState.lastPageIdx; i++) {
    pagesNumbers.push(i);
  }

  const pagesToRender = pagesNumbers.map(number => (
    <button
      key={number}
      onClick={() => paginationActions.goToPage(number)}
      className={`${styles.PaginationBtn} ${
        paginationState.actualPageIdx === number
          ? styles.PaginationBtnActive
          : ''
      }`}
    >
      {number}
    </button>
  ));
  return (
    <div className={styles.PaginationWrapper}>
      <div className={styles.ButtonsContainer}>
        <button
          onClick={paginationActions.goToFirstPage}
          className={styles.PaginationBtn}
        >
          GO TO FIRST
        </button>
        <button
          onClick={paginationActions.goToPreviousPage}
          data-testid='goToPrevPage'
          className={styles.PaginationBtn}
        >
          <span className={`${styles.Chevron} ${styles.ChevronLeft}`}></span>
        </button>
        <div data-testid='goToPageButtons'>{pagesToRender}</div>
        <button
          onClick={paginationActions.goToNextPage}
          data-testid='goToNextPage'
          className={styles.PaginationBtn}
        >
          <span className={`${styles.Chevron} ${styles.ChevronRight}`}></span>
        </button>
        <button
          onClick={paginationActions.goToLastPage}
          className={styles.PaginationBtn}
        >
          GO TO LAST
        </button>
      </div>
    </div>
  );
};

export default Pagination;
