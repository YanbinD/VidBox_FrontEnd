import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { movieCount, pageSize, currentPage, onPageChange } = props;
  const pageCount = movieCount / pageSize;
  
  if (pageCount < 1) {
    return null;
  }

  const pages = _.range(1, pageCount + 1);

  // use active class to highlight the current page 
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
            <a onClick={() => onPageChange(page)} className="page-link">
              {" "}
              {page}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
