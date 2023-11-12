import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='footerContainer'>
                <div className='countItem'></div>
                <div className='actionButton'>
                    <button className='button'>All</button>
                    <button className='button'>Active</button>
                    <button className='button'>Completed</button>
                </div>
            </div>
        )
    }
}