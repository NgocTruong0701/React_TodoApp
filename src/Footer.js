import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {applyFiter, ACTION, count} = this.props;
        return (
            <div className='footerContainer'>
                <div className='countItem'>{count}</div>
                <div className='actionButton'>
                    <button className='button' onClick={() => {applyFiter(ACTION.ALL)}}>All</button>
                    <button className='button' onClick={() => {applyFiter(ACTION.ACTIVE)}}>Active</button>
                    <button className='button' onClick={() => {applyFiter(ACTION.COMPLETE)}}>Completed</button>
                </div>
            </div>
        )
    }
}