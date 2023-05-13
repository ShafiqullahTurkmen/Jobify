import React from 'react'
import { useAppContext } from '../context/appContext';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';

export default function PageBtnContainer() {
  const { numOfPages, page, changePage } = useAppContext();

  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) newPage = numOfPages;
    changePage(newPage)
  }

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) newPage = 1;
    changePage(newPage)
  }

  const pages = Array.from({ length: numOfPages }, (_, i) => i + 1)
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className="btn-containers">
        {
          pages.map((pageNumber) => (
            <button
              className={pageNumber === page ? "pageBtn active" : "pageBtn"}
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </button>
          ))
        }
      </div>

      <div className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </div>
    </Wrapper>
  )
}
