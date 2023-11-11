import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="todoItem">
                <div className="container">
                    <input type='checkbox' defaultChecked={this.props.status} id={this.props.id} onChange={() => this.props.changeStatus(this.props.id)}/>
                    {
                        this.props.status ? (
                            <label htmlFor={this.props.id} className="checkedLabel">
                                {this.props.value}
                            </label>
                        ):
                        (
                            <label htmlFor={this.props.id}>
                                {this.props.value}
                            </label>
                        )
                    }
                </div>
            </div>
        )
    }
}