import React, { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import TodoList from './Components/TodoList';

const App = () => {
  const [stateInput, setStateInput] = useState({
    inputText: ''
  });
  const [stateTodos, setTodos] = useState([]);

  const onChangeHandler = (event) => {
    //console.log(event);

    setStateInput({
      inputText: event.target.value
    });
    //console.log(stateInput.inputText);
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List App </h1>
      </header>
      <Input 
      change={(event) => onChangeHandler(event)}/> 
      <TodoList 
      task="Make Homework"/>
    </div>
  );
}

export default App;
