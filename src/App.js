import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './TodoItem';
import './TodoList';
import {TodoList} from './TodoList';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';

const itemTodos = [{
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

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <TodoList todos={itemTodos}/>
          <TodoForm/>
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

