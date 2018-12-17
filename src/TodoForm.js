import React, { Component } from 'react';
import './App.css';
import './TodoItem';
import './TodoList';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: props.todo
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.setState ({ todo: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();
        this.props.createTodo(this.state.todo);

    }

    handleReset(event) {

        event.preventDefault();
        this.props.clearTodos();
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Todo:
<input type="text" name="todo" value={this.state.text} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" onChange={this.handleSubmit} />
                </form>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default TodoForm;
