import React from 'react';
import TodoList from './Components/TodoList';
import './main.scss';

function App() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
