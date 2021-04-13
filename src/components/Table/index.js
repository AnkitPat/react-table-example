import React from 'react';
import { useColumnOrder, useTable, useBlockLayout, useResizeColumns, useSortBy, usePagination } from 'react-table'
import './index.css';
import DraggableList from '../DraggableList';
import PropTypes from 'prop-types';
import Pagination from '../Pagination'

export const Table = ({ columns, data, enableSorting, enableResizing, showColumnDraggingOption, enablePagination }) => {


    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 30,
            width: 150,
            maxWidth: 400,
        }),
        []
    )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        setColumnOrder,
        visibleColumns,
        resetResizing,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state: { pageIndex },

    } = useTable({
        columns,
        data,
        defaultColumn,
        disableResize: !enableResizing,
        disableSortBy: !enableSorting
    },
        useSortBy,
        useBlockLayout,
        useResizeColumns,
        useColumnOrder,
        usePagination
    )

    const paginationProps = {
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        pageIndex
    }
    return (
        <>
            {showColumnDraggingOption ? <DraggableList list={visibleColumns} onListUpdated={(list) => setColumnOrder(list)} headerTitle="Drag columns to reorder table:" />
                : <></>}
            <table className="table" {...getTableProps()}>
                <thead className="thead">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {enableResizing && <div
                                        {...(enableResizing && { ...column.getResizerProps() })}
                                        className={`resizer ${column.isResizing ? 'isResizing' : ''
                                            }`}
                                    />}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}</span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="tbody" {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="table-controls">
                {enablePagination && <Pagination {...paginationProps} />}

                {enableResizing && <button className="reset-button" onClick={resetResizing}>Reset Resizing</button>}
            </div>

        </>
    )
}

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    enableSorting: PropTypes.bool,
    enableResizing: PropTypes.bool,
    showColumnDraggingOption: PropTypes.bool,
    enablePagination: PropTypes.bool
}