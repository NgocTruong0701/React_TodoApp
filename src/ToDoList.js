import React from "react";
import TodoItem from "./TodoItem";
import './ToDoList.css';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="ListTodoItem">
                {
                    this.props.todo.map(item => {
                       return <TodoItem id={item.id} value={item.text} status={item.status} changeStatus={this.props.changeStatus} editing={this.props.editing}/>
                    })
                }
            </div>
        )
    }
}