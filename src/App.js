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
      action: this.ACTION.ALL,
      editValue: '',
      editingId: 0,
      countComplete: 1,
      currentPage: 1,
    };
  }
  ACTION = {
    ALL: 0,
    ACTIVE: 1,
    COMPLETE: 2,
  }

  componentDidUpdate(prevProps, prevState) {
    let { todos } = this.state;
    if (prevState.todos !== todos) {
      const countComplete = todos.filter(todo => todo.status).length;
      this.setState({ countComplete });
    }
  }

  addTodoItem = (item) => {
    // console.log('â');
    const { todos } = this.state;
    const todoItem = {
      id: (todos.length ? Math.max(...todos.map(i => i.id)) : 0) + 1,
      text: item,
      status: false,
    };
    this.setState({ todos: [todoItem, ...todos] });
  }

  changeStatus = (id) => {
    // Lấy danh sách công việc mới với trạng thái của công việc có id tương ứng đã thay đổi
    let { todos } = this.state;
    todos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status, // Đảo ngược trạng thái
        };
      }
      return todo;
    });

    // Cập nhật trạng thái mới cho danh sách todos
    this.setState({ todos });
  }

  editing = (id, newValue) => {
    let { todos } = this.state;
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text: newValue,
        }
      }
      return todo;
    });

    this.setState({ todos });
    this.setState({ editingId: 0, editValue: '' });
  }

  setEditingId = (id, value) => {
    this.setState({ editingId: id, editValue: value });
  }

  remove = (id) => {
    let { todos } = this.state
    todos = todos.filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  applyFiter = action => {
    this.setState({ action });
  }

  handlePagination = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    return (
      <div className="App" >
        <h1>todos</h1>
        <ToDoHeader
          addTodoItem={this.addTodoItem}
          editingId={this.state.editingId}
          editing={this.editing}
          editValue={this.state.editValue}
        />
        <TodoList
          todo={this.state.todos}
          changeStatus={this.changeStatus}
          editing={this.editing}
          remove={this.remove}
          action={this.state.action}
          setEditingId={this.setEditingId}
          currentPage={this.state.currentPage}
        />
        <Footer
          applyFiter={this.applyFiter}
          ACTION={this.ACTION}
          count={this.state.countComplete}
          currentPage={this.state.currentPage}
          handlePagination={this.handlePagination}
        />
      </div >
    );
  }

}

export default App;
