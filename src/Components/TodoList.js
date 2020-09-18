import React from 'react';

const todoList = (props) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">{props.task}</ul>
        </div>
    );
}

export default todoList;