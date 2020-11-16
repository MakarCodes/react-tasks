import React from 'react';
import Pagination from './Pagination/Pagination';
import PaginationTable from './PaginationTable/PaginationTable';
import usePagination from './usePagination/usePagination';

let dataEntries = require('./users.json');

// 1. Dlaczego przy kazdym kliknieciu Pagination renderuje się 3 razy

const PaginationApp = () => {
  const [paginationState, paginationActions] = usePagination(dataEntries);
  return (
    <div className='App'>
      <h2 style={{ textAlign: 'center', margin: '10px 0' }}>
        Users - pagination
      </h2>
      {!paginationState.isBusy && (
        <PaginationTable
          dataEntries={paginationState.entriesOnSelectedPage()}
        />
      )}
      <Pagination
        paginationState={paginationState}
        paginationActions={paginationActions}
      />
    </div>
  );
};

export default PaginationApp;
