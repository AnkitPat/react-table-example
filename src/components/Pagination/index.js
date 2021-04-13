import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Pagination = ({ gotoPage, previousPage, nextPage, canPreviousPage, canNextPage,pageIndex, pageOptions, pageCount }) => {
    return (
        <div className="pagination">
            <button className={`${!canPreviousPage &&  'button-disable'} `} onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>{' '}
            <button className={`${!canPreviousPage &&  'button-disable'} `} onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>{' '}
            <button className={`${!canNextPage &&  'button-disable'} `} onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </button>{' '}
            <button className={`${!canNextPage &&  'button-disable'} `} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>{' '}
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
        </div>
    )
}

Pagination.propTypes = {
    gotoPage: PropTypes.func, 
    previousPage: PropTypes.func, 
    nextPage: PropTypes.func, 
    canPreviousPage: PropTypes.bool, 
    canNextPage: PropTypes.bool,
    pageIndex: PropTypes.number,
    pageOptions: PropTypes.any,
    pageCount: PropTypes.number
}

export default Pagination;