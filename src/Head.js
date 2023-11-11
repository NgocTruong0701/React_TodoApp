import React from 'react';
import './Head.css';

class ToDoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    handleInputChange = (event) => {
        // Lấy giá trị từ input vale và cập nhật vào state inputvalue
        this.setState({ inputValue: event.target.value });
    }

    handleKeyPress = (event) => {
        // console.log(event);
        if(event.key === 'Enter'){
           this.props.addTodoItem(this.state.inputValue);
        }
    }

    render() {
        return(
            <input className="input" type="text" placeholder='What need to be done?' onChange={this.handleInputChange} onKeyDown={this.handleKeyPress}/>
        );
    }
}

export default ToDoHeader; // export