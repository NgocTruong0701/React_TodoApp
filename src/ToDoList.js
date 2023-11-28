import React from "react";
import TodoItem from "./TodoItem";
import './ToDoList.css';
import { ACTION } from "./constant";
import { LIMIT } from "./constant";

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTodoItems = () => {
        const { action, todos, changeStatus, editing, remove, setEditingId, currentPage } = this.props;
        const indexOfLastItem = currentPage * LIMIT;
        const indexOfFirstItem = indexOfLastItem - LIMIT;
        const currentTodos = action === ACTION.ALL ? todos.slice(indexOfFirstItem, indexOfLastItem)
            : todos.filter(item => item.status === (action === ACTION.ACTIVE)).slice(indexOfFirstItem, indexOfLastItem);

        return currentTodos.map(item => (
            <TodoItem
                key={item.id}
                id={item.id}
                value={item.text}
                status={item.status}
                changeStatus={changeStatus}
                editing={editing}
                remove={remove}
                setEditingId={setEditingId}
            />
        ));
    };

    render() {
        return (
            <div className="ListTodoItem">
                {this.renderTodoItems()}
            </div>
        )
    }
}