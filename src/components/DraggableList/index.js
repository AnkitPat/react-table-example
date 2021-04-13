import React from 'react';
import ReactDragListView from 'react-drag-listview/lib/index.js';
import './index.css';
import PropTypes from 'prop-types';

/**
 * Sample list object
 * [
 *  {
 *  id : '1',
 * Header: 'Header Title'
 * }
 * ]
 */
const DraggableList = ({headerTitle, list, onListUpdated, listItemStyle }) => {
    const dragProps = {
        onDragEnd(fromIndex, toIndex) {
            const data = list
            const item = data.splice(fromIndex, 1)[0];
            data.splice(toIndex, 0, item);
            onListUpdated(data.map(column => column.id))
        },
        nodeSelector: 'li',
        handleSelector: 'a'
    };
    return (
        <>
        <h3 className="header-title">{headerTitle}</h3>
            <div className="list list1">
                <ReactDragListView  {...dragProps}>
                    <ol>
                        {list.map((item, index) => (
                            <li key={index} style={listItemStyle ? {...listItemStyle} : {}}>
                                {item.Header}
                                <a href="/#">Drag</a>
                            </li>
                        ))}
                    </ol>
                </ReactDragListView>
            </div>
        </>
    )
}

DraggableList.propTypes = {
    headerTitle: PropTypes.string, 
    list: PropTypes.array.isRequired,
    onListUpdated: PropTypes.func.isRequired, 
    listItemStyle: PropTypes.any
}
export default DraggableList;