import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

function TaskInput() {
  // Use only what is needed
  const { newTask, setNewTask, addTask, numberOfTasks } = useContext(TaskContext);

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add</button>
      <h2>Total Tasks: {numberOfTasks}</h2>
    </div>
  );
}

export default TaskInput;

