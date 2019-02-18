import React from "react";

const Task = props => {
  const { task, done, deleted} = props
  return (
    <li>
      <strong>{task.text} </strong> - do
      <span> {task.date} </span>
      <button onClick={() => done(task.id) }>Zostało zrobione</button>
      <button onClick={() => deleted(task.id)}>X</button>
    </li>
  );
};

export default Task;
