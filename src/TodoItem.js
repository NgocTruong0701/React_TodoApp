import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    setEditingId = (id, value) => {
        this.props.setEditingId(id, value); 
    }

    render() {
        let {id, value, changeStatus, status, remove} = this.props;
        return (
            <div className="todoItem">
                <div className="container">
                    <input
                        type='checkbox'
                        checked={status}
                        onChange={() => changeStatus(id)}
                    />
                    <>
                        <label
                            htmlFor={this.props.id}
                            className={this.props.status ? "checkedLabel" : ""}
                            onClick={() => {this.setEditingId(id, value) }}
                        >
                            {value}
                        </label>
                        <label onClick={() => {remove(id) }}>X</label>
                    </>
                </div>
            </div>
        )
    }
}