import React from 'react';
import './Head.css';

class ToDoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidUpdate() {
        if(this.props.editingId) this.inputRef.current.value = this.props.editValue;
    }

    handleKeyPress = (event) => {
        let {value} = this.inputRef.current;
        // console.log(event);
        if (event.key === 'Enter') {
            if (value !== '') {
                if(this.props.editingId) {
                    this.props.editing(this.props.editingId, value)
                }
                else {
                    this.props.addTodoItem(value);
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