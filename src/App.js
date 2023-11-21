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
      status: undefined
    };
  }
  todosFilter = [];

  addTodoItem = (item) => {   
    const {todos} = this.state; 
    const todoItem = {
      id: (todos.length ? Math.max(...todos.map(i => i.id)) : 0) + 1,
      text: item,
      status: false,
    };
    this.setState({ todos: [todoItem, ...todos] });
    // this.applyFiter(this.state.status, [todoItem, ...this.state.todos]);
  }

  changeStatus = (id) => {
    // Lấy danh sách công việc mới với trạng thái của công việc có id tương ứng đã thay đổi
    let {todos} = this.state;
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
    
    // this.applyFiter(this.state.status, updatedTodos);
  }

  editing = (id, newValue) => {
    let {todos} = this.state;
    todos = todos.map((todo) => {
      if(todo.id === id){
        return {
          ...todo,
          text: newValue,
        }
      }
      return todo;
    });

    this.setState({todos});
    // this.applyFiter(this.state.status, updatedTodos);
  }

  remove = (id) => {
    let {todos} = this.state.todos
    todos = todos.filter(todo => todo.id !== id);
    this.setState({ todos });
    // this.applyFiter(this.state.status, updatedTodos);
  }

  applyFiter = (status) => {
    if(status === undefined){
      let { todos } = this.state;
      todos = [...this.todosFilter];
      this.setState({ todos, status });
    }
    else{
      let {todos} = this.state;
      this.todosFilter = [...todos];
      let updatedTodos = (todos).filter(todo => todo.status === status);
      this.setState({ todos: updatedTodos, status: status });
    }
  }

  render(){
      return(
      <div className = "App" >
        <h1>todos</h1>
        <ToDoHeader addTodoItem = {this.addTodoItem}/>
        <TodoList
            todo={this.state.todos} 
            changeStatus={this.changeStatus} 
            editing={this.editing} 
            remove={this.remove}
        />
        <Footer applyFiter={this.applyFiter} />
      </div >
    );
  }

}

export default App;
