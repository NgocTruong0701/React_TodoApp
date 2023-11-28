import React from 'react';
import './Footer.css';
import { ACTION } from './constant';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {applyFiter, count, currentPage, handlePagination} = this.props;
        return (
            <div className='footerContainer'>
                <div className='countItem'>{count}</div>
                <div className='actionButton'>
                    <button className='button' onClick={() => {applyFiter(ACTION.ALL)}}>All</button>
                    <button className='button' onClick={() => {applyFiter(ACTION.ACTIVE)}}>Active</button>
                    <button className='button' onClick={() => {applyFiter(ACTION.COMPLETE)}}>Completed</button>
                </div>
                <div className='actionButton'>
                    <button onClick={() => handlePagination(currentPage - 1)}>
                        Prev
                    </button>
                    <button onClick={() => handlePagination(currentPage + 1)}>
                        Next
                    </button>
                </div>
            </div>
        )
    }
}