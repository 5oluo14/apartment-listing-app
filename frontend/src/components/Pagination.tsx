import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-center mt-8">
            <ul className="flex space-x-2">
                {currentPage > 1 && (
                    <li>
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
                            aria-label="Previous page"
                        >
                            &laquo;
                        </button>
                    </li>
                )}

                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => onPageChange(number)}
                            className={`px-3 py-1 rounded ${currentPage === number
                                    ? 'bg-blue-600 text-white'
                                    : 'border border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}

                {currentPage < totalPages && (
                    <li>
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100"
                            aria-label="Next page"
                        >
                            &raquo;
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
};