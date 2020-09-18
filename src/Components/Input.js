import React from 'react';


const input = (props) => {
    const statusHandler = (event) => {
      props.setStatus(event.target.value);
    }

    return (
        <form>
        <input 
          value={props.value}
          onChange={props.change} 
          type="text" 
          className="todo-input" />
        <button className="todo-button" type="submit" onClick={props.click}>
          <i className="fas fa-plus"></i>
        </button>
        <div className="select">
          <select 
            onChange={(event) => statusHandler(event)}
            name="todos" 
            className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}


export default input;