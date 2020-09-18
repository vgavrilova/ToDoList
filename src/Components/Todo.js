import React from 'react';


const todo = (props) => {
   
    // get passed stateTodos and setTodos from App.js
    // get an index of an element from map() method in TodoList.js
    // it can also be done with filtering the ids
    const deleteHandler = (todoIndex) => {
        const todos = [...props.todos];
        todos.splice(todoIndex, 1);
        props.setTodos(todos);
        
    }

    // reset completed property to true or false
    const completedTaskHandler = (todoIndex) => {
        const completedTodo = [...props.todos];
        completedTodo[todoIndex].completed = !completedTodo[todoIndex].completed;
        props.setTodos(completedTodo);
    }


    return (
        
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ''}`}>{props.task}</li>
            <button 
                className="complete-btn"
                onClick={() => completedTaskHandler(props.index)}
                >
                <i className="fas fa-check"></i>
            </button>
            <button 
                className="trash-btn" 
                onClick={() => deleteHandler(props.index)}>
                    <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}


export default todo;