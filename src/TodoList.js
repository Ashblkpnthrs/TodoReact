import React from 'react';
import {TodoItem} from './TodoItem';
 export class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
     render(){
         const todolist = this.props.todos.map((todo)=> 
        <TodoItem title={todo.title} isDone={todo.isDone}/>
            )
        return( 
            <>
            <h1>Todo List: {todolist.length}</h1>
            <h5>{todolist}</h5>
            </>
                 
         );
    }
}

export default TodoList;