import './App.css';
import ToDoHeader from './Head';
import TodoList from './ToDoList';
import Footer from './Footer';
import React from 'react';
import { ACTION } from './constant';
import {ThemeContext} from './ThemeProvider'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Go to School', status: false },
        { id: 2, text: 'Go to lunch', status: false },
        { id: 3, text: 'Go to lunch 2', status: true },
      ],
      action: ACTION.ALL,
      editValue: '',
      editingId: 0,
      countComplete: 1,
      currentPage: 1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    let { todos } = this.state;
    if (prevState.todos !== todos) {
      const countComplete = todos.filter(todo => todo.status).length;
      this.setState({ countComplete });
    }
  }

  addTodoItem = (item) => {
    const { todos } = this.state;
    const todoItem = {
      id: (todos.length ? Math.max(...todos.map(i => i.id)) : 0) + 1,
      text: item,
      status: false,
    };
    this.setState({ todos: [todoItem, ...todos] });
  }

  changeStatus = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    }));
  }

  editing = (id, newValue) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, text: newValue } : todo
      ),
      editingId: 0,
      editValue: ''
    }));
  }

  setEditingId = (id, value) => {
    this.setState({ editingId: id, editValue: value });
  }

  remove = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  }

  applyFiter = action => {
    this.setState({ action });
  }

  handlePagination = (currentPage) => {
    this.setState(prevState => {
      const { length } = prevState.todos;

      if (currentPage <= 0) {
        currentPage = 1;
      } else if (currentPage > length) {
        currentPage = length;
      }
      return { currentPage };
    });
  }


  render() {
    const { toggleTheme, theme } = this.context;
    console.log(this.context);
    return (
      <div className={theme}>
        <div className="App" >
          <button onClick={toggleTheme}>Toggle Theme</button>
          <h1>todos</h1>
          <ToDoHeader
            addTodoItem={this.addTodoItem}
            editingId={this.state.editingId}
            editing={this.editing}
            editValue={this.state.editValue}
          />
          <TodoList
            todos={this.state.todos}
            changeStatus={this.changeStatus}
            editing={this.editing}
            remove={this.remove}
            action={this.state.action}
            setEditingId={this.setEditingId}
            currentPage={this.state.currentPage}
          />
          <Footer
            applyFiter={this.applyFiter}
            count={this.state.countComplete}
            currentPage={this.state.currentPage}
            handlePagination={this.handlePagination}
          />
        </div >
      </div>
    );
  }

}
App.contextType = ThemeContext 
export default App;
