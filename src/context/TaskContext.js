import React, { createContext, useState } from 'react';

// Create context
export const TaskContext = createContext();

// Create context provider
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setNewTask('');
    }
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter(task => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      newTask,
      setNewTask,
      addTask,
      deleteTask,
      numberOfTasks: tasks.length
    }}>
      {children}
    </TaskContext.Provider>
  );
};

