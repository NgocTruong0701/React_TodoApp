import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='footerContainer'>
                <div className='countItem'></div>
                <div className='actionButton'>
                    <button className='button' onClick={() => {this.props.applyFiter()}}>All</button>
                    <button className='button' onClick={() => {this.props.applyFiter(false)}}>Active</button>
                    <button className='button' onClick={() => {this.props.applyFiter(true)}}>Completed</button>
                </div>
            </div>
        )
    }
}