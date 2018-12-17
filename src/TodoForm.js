import React, { Component } from 'react';
import './App.css';
import './TodoItem';
import './TodoList';
import { TodoList } from './TodoList';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: '', submitChecked: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.name === 'todo') {
            console.log('todo add', event.target.value, event);
            //TODO : le todo rentrer est récupéer
            //event.target.value = 
        }
    }

    handleSubmit(event) {

        if (event.target.name === 'todo') {
            //alert('A todo was submitted: ' + this.state.todo);
            console.log('todo submitted', event.target.value, event);
            event.preventDefault();
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Todo:
<input type="text" name="todo" value={this.state.text} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" />
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoForm;
