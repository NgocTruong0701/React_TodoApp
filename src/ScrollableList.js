import React from 'react';
import TodoList from './ToDoList';

class ScrollableList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.todos,
            loading: false,
            currentPage: 1,
            itemsPerPage: 5,
        }

        this.handleScroll = this.handleScroll.bind(this); // Bind 'this' cho phương thức handleScroll
    }

    componentDidMount() {
        this.scrollableDiv.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        this.scrollableDiv.removeEventListener('scroll', this.handleScroll);
    }

    fetchMoreData() {
        if (!this.state.loading) {
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

    handleScroll = () => {
        const { clientHeight, scrollHeight, scrollTop } = this.scrollableDiv;
        const atBottom = clientHeight + scrollTop >= scrollHeight - 100;

        if (atBottom) {
            this.fetchMoreData();
        }
    }

    render() {
        return (
            <div
                style={{ height: '500px', overflowY: 'scroll' }}
                ref={(div) => { this.scrollableDiv = div; }}
            >
                <TodoList todos={this.state.todos} />
                {this.state.loading && <p>Loading...</p>}
            </div>
        );
    }

}

export default ScrollableList;