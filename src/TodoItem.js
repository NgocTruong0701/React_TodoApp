import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingId: null,
        }
    }

    setEditingId = (id) => {
        this.setState({ editingId: id });
    }

    render() {
        return (
            <div className="todoItem">
                <div className="container">
                    <input type='checkbox' checked={this.props.status} id={this.props.id} onChange={() => this.props.changeStatus(this.props.id)} />
                    {
                        this.state.editingId === this.props.id ? (
                            // Hiển thị ô nhập để chỉnh sửa
                            <input
                                type="text"
                                defaultValue={this.props.value}
                            // onChange={(e) => handleEditChange(this.props.id, e.target.value)}
                            />
                        ) :
                            (
                                <label htmlFor={this.props.id} className={this.props.status ? "checkedLabel" : ""} onDoubleClick={this.setEditingId(this.props.id)}>
                                    {this.props.value}
                                </label>
                            )
                    }
                    {/* <label htmlFor={this.props.id} className={this.props.status ? "checkedLabel" : ""} onDoubleClick={this.setEditingId(this.props.id)}>
                        {this.props.value}
                    </label> */}
                </div>
            </div>
        )
    }
}