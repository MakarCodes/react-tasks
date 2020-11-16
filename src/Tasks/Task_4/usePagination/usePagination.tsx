import { useState, useEffect } from 'react';
const FIRST_PAGE_IDX: number = 1;

const usePagination = (dataEntries: any, elementsOnPage: number = 20) => {
  const [actualPageIdx, setActualPageIdx] = useState(FIRST_PAGE_IDX);
  const [isBusy, setIsBusy] = useState(false);
  const lastPageIdx: number = Math.ceil(dataEntries / elementsOnPage);

  useEffect(() => {
    setIsBusy(true);
    let timer = setTimeout(() => setIsBusy(false), 333);

    return () => {
      clearTimeout(timer);
    };
  }, [actualPageIdx]);

  const entriesOnSelectedPage = (): number => {
    const firstElementIdxOnActualPage: number =
      (actualPageIdx - 1) * elementsOnPage;
    const lastElementIdxOnActualPage: number =
      actualPageIdx === lastPageIdx
        ? dataEntries.length - 1
        : firstElementIdxOnActualPage + elementsOnPage;
    return dataEntries.slice(
      firstElementIdxOnActualPage,
      lastElementIdxOnActualPage
    );
  };

  const goToFirstPage = () => {
    setActualPageIdx(FIRST_PAGE_IDX);
  };
  const goToLastPage = () => {
    setActualPageIdx(lastPageIdx);
  };

  const goToPage = (pageNumber: number) => {
    setActualPageIdx(pageNumber);
  };

  const goToNextPage = () => {
    setActualPageIdx(actualPageIdx =>
      actualPageIdx === lastPageIdx ? lastPageIdx : actualPageIdx + 1
    );
  };
  const goToPreviousPage = () => {
    setActualPageIdx(actualPageIdx =>
      actualPageIdx === 1 ? actualPageIdx : actualPageIdx - 1
    );
  };

  const paginationState = {
    actualPageIdx,
    lastPageIdx,
    entriesOnSelectedPage,
    isBusy,
  };

  const paginationActions = {
    goToFirstPage,
    goToPreviousPage,
    goToPage,
    goToNextPage,
    goToLastPage,
  };

  return [paginationState, paginationActions];
};

export default usePagination;
