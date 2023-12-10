import React from 'react';
import TodoList from './ToDoList';

class ScrollableList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.todo,
            loading: false,
            currentPage: 1,
            itemsPerPage: 5,
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    fetchMoreData(){
        if(!this.state.loading) {
            const { currentPage, itemsPerPage, todos } = this.state;
            const start = currentPage * itemsPerPage;
            const end = start + itemsPerPage;
            const nextItems = todos.slice(start, end);

            this.setState({ loading: true });

            // Simulate fetching data after 1 second
            setTimeout(() => {
                this.setState({
                    todos: [...this.state.todos, ...nextItems],
                    currentPage: currentPage + 1,
                    loading: false,
                });
            }, 1000);
        }
    }

    handleScroll() {
        const { innerHeight, scrollY } = window;
        const { offsetHeight } = document.documentElement;
        const atBottom = innerHeight + scrollY >= offsetHeight - 100;

        if (atBottom) {
            this.fetchMoreData();
        }
    }

    render() {
        return (
            <div style={{ height: '500px', overflowY: 'scroll' }}>
                <TodoList todos={this.state.todos} />
                {this.state.loading && <p>Loading...</p>}
            </div>
        );
    }

}

export default ScrollableList;