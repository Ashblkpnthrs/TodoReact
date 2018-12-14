import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

const items = [{
    "title": "Send a mail",
    "isDone":false
  },
  {
    "title": "Send a message",
    "isDone":false
  },
  {
    "title": "Send a sos to the world",
    "isDone":false
  }];
  
  const listItems = items.map((items) =>
    <TodoList key={items.id} name={items.name} />
  );

function TodoList() {
    return (
      <div>
        <ul>
          <TodoItem name="React.js" />
          <TodoItem name="React Native" />
          <TodoItem name="Angular" />
          <TodoItem name="Typescript" />
        </ul>
      </div>
    )
  }
  
  ReactDOM.render(
    /*<App />,
    document.getElementById('root'),*/
    <ul>{listItems}</ul>,
    document.getElementById('root')
  )
  
  export default TodoList;