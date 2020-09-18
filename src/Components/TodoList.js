import React from 'react';
import Todo from './Todo';

const todoList = (props) => {
    
    return (
        // in map() we also need an index of an element in order to delete it
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map((todo, index) => 
                   ( <Todo 
                        todo={todo}
                        todos={props.todos}
                        setTodos={props.setTodos}
                        task={todo.text}
                        key={todo.id}
                        completed={todo.completed}
                        index={index}/>)
                )}
            </ul>
        </div>
    );
}

export default todoList;