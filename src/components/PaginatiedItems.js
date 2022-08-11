import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

export function PaginatedItems({ itemsPerPage, data, nextPage }) {
  //console.log({ itemsPerPage, data })
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    if(!data || !data.total_pages) return
    setPageCount(Math.ceil(data.total_pages / itemsPerPage));

  }, [data, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_pages;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    nextPage(event.selected + 1)
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className='pagination'
      />
    </>
  );
}