import React from 'react'
import ReactPaginate from 'react-paginate';
const Pagination = ({handlepagechanges , pagecount}) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        pageRangeDisplayed={10}
        onPageChange={handlepagechanges}
        pageCount={pagecount}
      />
    </>
  )
}

export default Pagination