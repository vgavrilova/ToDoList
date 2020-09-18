import React from 'react';


const input = (props) => {


    return (
        <form>
        <input onChange={props.change} type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}


export default input;