import React from "react";
import TodoItem from "./TodoItem";
import './ToDoList.css';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    itemsPerPage = 5;
    
    renderTodoItems = () => {
        const { action, todo, changeStatus, editing, remove, setEditingId, currentPage} = this.props;
        const indexOfLastItem = currentPage * this.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.itemsPerPage;
        const currentTodos = todo.slice(indexOfFirstItem, indexOfLastItem);

        if (action !== 0) {
            return currentTodos
                .filter(item => item.status === (action === 2 ? true : false))
                .map(item => (
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
        } else {
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