// import
import React, { useEffect, useState } from 'react';

// styles
import './styles.scss';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from, to, step = 1) => {
  let index = from;
  const range = [];

  while (index <= to) {
    range.push(index);
    index += step;
  }

  return range;
};

// component
const Pagination = ({ currentPage, pageLimit, onPageChanged, interviews }) => {
  const totalRecords = interviews.length;
  const pageNeighbours = 2;
  
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit));
  }, [pageLimit, totalRecords]);

  const fetchPageNumbers = () => {
    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffSet = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffSet, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case hasLeftSpill && hasRightSpill:
          default: {
            pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
            break;
          }
      }
      return [1, ...pages, totalPages];
    }
    return range(1, totalPages);
  };

  const pages = fetchPageNumbers() || [];

  return (
    <nav aria-label="interviews pagination">
      <ul className="interviews__pagination">
        {
          pages.map((page, index) => {
            if (page === LEFT_PAGE) {
              return (
                <li key={ index } className="interviews__pagination__page">
                  <a
                    href="/"
                    className="interviews__pagination__page__link"
                    aria-label="previous"
                    onClick={(event)=> {
                      onPageChanged(event, (pageNeighbours * 2) - 1);
                    }}
                  >
                    <span aria-hidden="true">
                      { '<' }
                    </span>
                  </a>
                </li>
              )
            }

            if (page === RIGHT_PAGE) {
              return (
                <li key={ index } className="interviews__pagination__page">
                  <a
                    href="/"
                    className="interviews__pagination__page__link"
                    aria-label="next"
                    onClick={(event)=> {
                      onPageChanged(event, (pageNeighbours * 2) + 3);
                    }}
                  >
                    <span aria-hidden="true">
                      { '>' }
                    </span>
                  </a>
                </li>
              )
            }

            return (
              <li key={ index } className={ `interviews__pagination__page interviews__pagination__page${currentPage === page ? '--active' : ''}` }>
                <a
                  href="/"
                  className="interviews__pagination__page__link"
                  onClick={(event) => {
                    onPageChanged(event, page);
                  }}
                >
                  { page }
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
};

// export
export default Pagination;