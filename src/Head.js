import React from 'react';
import './Head.css';

class ToDoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidUpdate() {
        let {editingId, editValue} = this.props
        let {value} = this.inputRef.current
        if (editingId) value = editValue;
    }

    handleKeyPress = (event) => {
        let { value } = this.inputRef.current;
        const { editing, editingId, addTodoItem } = this.props;
        if (event.key === 'Enter') {
            if (value !== '') {
                if (editingId) {
                    editing(editingId, value)
                }
                else {
                    addTodoItem(value);
                }
                this.inputRef.current.value = '';
            }
        }
    }

    render() {
        return (
            <input
                className="input"
                type="text"
                placeholder='What need to be done?'
                ref={this.inputRef}
                onKeyDown={this.handleKeyPress}
            />
        );
    }
}

export default ToDoHeader; // export