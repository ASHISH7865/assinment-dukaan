'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";


interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange?: (currentPage: number) => void;
  pageRangeDisplayed?: number; // Define the number of visible page numbers
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, onPageChange, pageRangeDisplayed = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    onPageChange && onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers: React.ReactNode[] = [];
    const startPage = Math.max(1, currentPage - Math.floor(pageRangeDisplayed / 2));
    const endPage = Math.min(totalPages, startPage + pageRangeDisplayed - 1);

    if (startPage > 1) {
      // Add the first page
      pageNumbers.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`pagination-button py-[6px] px-2 rounded-[4px] text-sm ${1 === currentPage ? "bg-[#146EB4] text-white" : "bg-white text-gray-700"}`}
        >
          {1}
        </button>
      );

      // Add ellipsis if needed
      if (startPage > 2) {
        pageNumbers.push(<span key="ellipsis-start" className="pagination-ellipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-button py-[6px] px-2 rounded-[4px] text-sm ${i === currentPage ? "bg-[#146EB4] text-white" : "bg-white text-gray-700"}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pageNumbers.push(<span key="ellipsis-end" className="pagination-ellipsis">...</span>);
      }

      // Add the last page
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`pagination-button py-[6px] px-2 rounded-[4px] text-sm ${totalPages === currentPage ? "bg-[#146EB4] text-white" : "bg-white text-gray-700"}`}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center space-x-2 ">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="pagination-button border border-[#d9d9d9] px-[14px] py-[6px] rounded-[4px] flex items-center gap-[6px] hover:bg-[#d9d9d9]">
        <Image src="/svg/ChevronRight.svg" width={18} height={18} alt="arrow" className="rotate-180"/>
        <span className="text-[14px] font-normal">Previous</span>
      </button>
      {renderPageNumbers()}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="pagination-button border border-[#d9d9d9] px-[14px] py-[6px] rounded-[4px] flex items-center gap-[6px] hover:bg-[#d9d9d9]">
      <span className="text-[14px] font-normal">Next</span>
      <Image src="/svg/ChevronRight.svg" width={18} height={18} alt="arrow"/>
      </button>
    </div>
  );
};

export default Pagination;
