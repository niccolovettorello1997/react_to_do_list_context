import React from 'react';
import './App.css';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

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

