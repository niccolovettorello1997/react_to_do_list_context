import React from 'react';
import './App.css';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';
import TaskInput from './TaskInput';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>To-Do List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;

