import { useState } from 'react';

type paginationProps = {
  totalPages: number;
  onChangePage: (page: number) => void;
};

const Pagination = ({ totalPages, onChangePage }: paginationProps) => {
  const pages: number[] = [];
  const [activePage, setActivePage] = useState(1);

  for (let index = 1; index < totalPages; index++) {
    pages.push(index);
  }
  const handleChange = (page: number) => {
    setActivePage(page);
    onChangePage(page);
  };

  return (
    <ul className='pagination'>
      {pages.map((page) => (
        <li key={`page${page}`}>
          <button
            className={
              page === activePage
                ? 'pagination__item pagination__item--active'
                : 'pagination__item'
            }
            onClick={() => handleChange(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
