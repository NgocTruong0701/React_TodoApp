import './App.css';
import ToDoHeader from './Head';
import TodoList from './ToDoList';
import Footer from './Footer';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Go to School', status: false },
        { id: 2, text: 'Go to lunch', status: false },
        { id: 3, text: 'Go to lunch 2', status: true },
      ],
    };
  }

  addTodoItem = (item) => {
    const todoItem = {
      id: this.state.todos.length + 1,
      text: item,
      status: false,
    };
    this.setState({ todos: [todoItem, ...this.state.todos] });
  }

  changeStatus = (id) => {
    // Lấy danh sách công việc mới với trạng thái của công việc có id tương ứng đã thay đổi
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status, // Đảo ngược trạng thái
        };
      }
      return todo;
    });

    // Cập nhật trạng thái mới cho danh sách todos
    this.setState({ todos: updatedTodos });
  }

  render(){
      return(
      <div className = "App" >
        <h1>todos</h1>
        <ToDoHeader addTodoItem = {this.addTodoItem}/>
        <TodoList todo={this.state.todos} changeStatus={this.changeStatus}/>
        <Footer />
      </div >
    );
  }

}

export default App;
