import React, { useState, useEffect } from 'react';
import './App.css';
import Input from './Components/Input';
import TodoList from './Components/TodoList';
import axios from 'axios';

const App = () => {


  // States
  const [stateInput, setStateInput] = useState({
    inputText: ''
  });
  const [stateTodos, setTodos] = useState([]);

  const [status, setStatus] = useState('all');

  const [filteredTodos, setFilteredTodos] = useState([]);

 useEffect(() => {
    getLocalTodods();
  }, []);  

  
    // an empty array means that the function is going to be run only once
    // but we can add the actions, after which this function is going to run again
    useEffect(() => {
      filterHandler();
      saveLocalTodods();
   
    }, [stateTodos, status]);

  // Functions
  const onChangeHandler = (event) => {
    //console.log(event);

    setStateInput({
      inputText: event.target.value
    });
    //console.log(stateInput.inputText);
  }

  // add a todo from the input
  // and copy previous todos if there were any
  const addTodoHandler = (event) => {
    // prevent refreshing the page
    event.preventDefault();
    setTodos([
      ...stateTodos, {text: stateInput.inputText, completed: false, id: Math.random() * 1000}
    ]);
    setStateInput({
      inputText: ''
    });
  }

  const filterHandler = () => {
    const todos = [...stateTodos];
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }



  // save todos to the local storage
   const saveLocalTodods = () => {
    localStorage.setItem('todos', JSON.stringify(stateTodos));
    
  };

  // get todos from the storage
  const getLocalTodods = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify());
    } else {
      let savedItems = JSON.parse(localStorage.getItem('todos'));
      setTodos(savedItems);

    }
  }; 
 
  


  return (
    <div className="App">
      <header>
        <h1>Todo List App </h1>
      </header>
      <Input 
        change={(event) => onChangeHandler(event)}
        click={(event) => addTodoHandler(event)}
        value={stateInput.inputText}
        setStatus={setStatus}/> 
      <TodoList 
        todos={stateTodos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
