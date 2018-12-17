import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TodoItem';
import './TodoList';
import { TodoList } from './TodoList';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [{
        title: "Send a mail",
        isDone: false
      },
      {
        title: "Send a Message",
        isDone: false
      },
      {
        title: "Send an SOS to the world",
        isDone: false
      }]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }

  handleChange(event) {
    this.setState({
      todos: [{ title: event, isDone: false }, ...this.state.todos]
    })
  }

    handleReset(event) {
    
      this.setState({
        todos: []
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <TodoList todos={this.state.todos} />
            <TodoForm createTodo={this.handleChange}
            clearTodos={this.handleReset} />
          </p>
        </header>
      </div>
    );
  }
}


/*function App(){
  const listTodos = [{
   title: "Send a mail",
   isDone: false
 },
{
 title: "Send a Message",
 isDone: false
},
{
 title: "Send an SOS to the world",
 isDone: false
}]*/

/*return(  
   <TodoList todos={listTodos}/>
 );
}*/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;

