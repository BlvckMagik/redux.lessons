import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isFirstPage = currentPage + 1 === 1;
  const isLastPage = Math.ceil(totalItems / itemsPerPage) === currentPage + 1;

  const prevButton = isFirstPage ? (
    <button className='btn' disabled></button>
  ) : (
    <button className='btn' onClick={goPrev}>
      ←
    </button>
  );

  const nextButton = isLastPage ? (
    <button className='btn' disabled></button>
  ) : (
    <button className='btn' onClick={goNext}>
      →
    </button>
  );

  return (
    <div className='pagination'>
      {prevButton}
      <span className='pagination__page'>{currentPage + 1}</span>
      {nextButton}
    </div>
  );
};

export default Pagination;
