import React from 'react'
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, onClick}) => {

  const pagesArray = getPagesArray(totalPages);

  return (
    <div className="pagination">
        {pagesArray.map((p) => (
          <span key={p} className={page === p ? "active" : ""} onClick={() => onClick(p)}>
            {p}
          </span>
        ))}
      </div>
  )
}

export default Pagination