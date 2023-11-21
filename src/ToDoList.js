import React from "react";
import TodoItem from "./TodoItem";
import './ToDoList.css';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    renderTodoItems = () => {
        const { action, todo, changeStatus, editing, remove } = this.props;

        if (action !== 0) {
            return todo
                .filter(item => item.status === (action === 1 ? true : false))
                .map(item => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        value={item.text}
                        status={item.status}
                        changeStatus={changeStatus}
                        editing={editing}
                        remove={remove}
                    />
                ));
        } else {
            return todo.map(item => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    value={item.text}
                    status={item.status}
                    changeStatus={changeStatus}
                    editing={editing}
                    remove={remove}
                />
            ));
        }
    };

    render() {
        return (
            <div className="ListTodoItem">
                {this.renderTodoItems()}
            </div>
        )
    }
}