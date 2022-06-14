import React, { FC } from 'react';
import { usePagination } from '../../hooks/usePagination';
import ItemStyles from './Pagination.module.css';

export interface PaginationProps {
  totalPages: number;
  page: number;
  changePage: (el: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, page, changePage }) => {
  const [pagesArray] = usePagination(totalPages);

  return (
    <div className={ItemStyles.pageBtnsWrapper}>
      {pagesArray.map((p) => {
        if (p === 1) {
          return (
            <div className={ItemStyles.firstPageBtnWrapper} key={p}>
              <span
                onClick={() => changePage(p)}
                className={page === p ? ItemStyles.pageBtnCurrent : ItemStyles.pageBtn}
              >
                {p}
              </span>
              {pagesArray.length > 10 && page > 6 ? (
                <div className={ItemStyles.othersPages}>...</div>
              ) : (
                ''
              )}
            </div>
          );
        }

        if (p !== 1 && p !== pagesArray.length && Math.abs(page - p) < 5) {
          return (
            <span
              onClick={() => changePage(p)}
              key={p}
              className={page === p ? ItemStyles.pageBtnCurrent : ItemStyles.pageBtn}
            >
              {p}
            </span>
          );
        }

        if (p === pagesArray.length) {
          return (
            <div className={ItemStyles.lastPageBtnWrapper} key={p}>
              {p - page > 5 ? <div className={ItemStyles.othersPages}>...</div> : ''}
              <span
                onClick={() => changePage(p)}
                className={page === p ? ItemStyles.pageBtnCurrent : ItemStyles.pageBtn}
              >
                {p}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Pagination;
