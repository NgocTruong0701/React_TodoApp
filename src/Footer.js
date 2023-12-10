import React from 'react';
import './Footer.css';
import { ACTION, LIMIT } from './constant';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {applyFiter, count, currentPage, handlePagination, length} = this.props;
        return (
            <div className='footerContainer'>
                <div className='countItem'>{count}</div>
                <div className='actionButton'>
                    <button className='button' onClick={() => {applyFiter(ACTION.ALL)}}>All</button>
                    <button className='button' onClick={() => {applyFiter(ACTION.ACTIVE)}}>Active</button>
                    <button className='button' onClick={() => {applyFiter(ACTION.COMPLETE)}}>Completed</button>
                </div>
                <div className='actionButton'>
                    <button disabled={currentPage <= 1} onClick={() => {
                        currentPage = currentPage <= 0 ? currentPage : currentPage - 1;
                        handlePagination(currentPage)
                    }}>
                        Prev
                    </button>
                    <button disabled={currentPage >= (length / LIMIT)} onClick={() => {
                        currentPage = currentPage > length ? currentPage : currentPage + 1;
                        handlePagination(currentPage)
                    }}>
                        Next
                    </button>
                </div>
            </div>
        )
    }
}