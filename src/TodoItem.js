import React from 'react';
import './TodoItem.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingId: null,
            newValue: '',
        }
    }

    setEditingId = (id) => {
        this.setState({ editingId: id });
    }

    handleKeyPress = (event) => {
        // console.log(event);
        if (event.key === 'Enter') {
            if (this.state.newValue !== '') {
                this.props.editing(this.state.editingId,this.state.newValue);
                this.setState({newValue: ''});
                this.setState({editingId: null});
            }
        }
    }

    handleEditChange = (event) =>{
        this.setState({newValue: event.target.value});
    }

    render() {
        return (
            <div className="todoItem">
                <div className="container">
                    <input type='checkbox' checked={this.props.status} onChange={() => this.props.changeStatus(this.props.id)} />
                    {/* {console.log(this.state.editingId === this.props.id, this.props.id)} */}
                    {
                        this.state.editingId === this.props.id ? (
                            // Hiển thị ô nhập để chỉnh sửa
                            <input
                                type="text"
                                defaultValue={this.props.value}
                                onChange={this.handleEditChange}
                                onKeyDown={this.handleKeyPress}
                            />
                        ) :
                            (
                                <>
                                    <label htmlFor={this.props.id} className={this.props.status ? "checkedLabel" : ""} onDoubleClick={() => {this.setEditingId(this.props.id)}}>
                                        {this.props.value}
                                    </label>
                                    <label onClick={() => {this.props.remove(this.props.id)}}>X</label>
                                </>
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