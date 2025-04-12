import React, { useContext } from 'react';
import { TaskContext } from './TaskContext';

function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(task)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
