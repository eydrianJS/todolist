import React from "react";
import Task from "./Task";

const TaskList = props => {
  const tasks= props.tasks.map(task => <Task key={task.id} task={task} deleted={props.deleted} done={props.done}/>);

  return (
    <>
      <div className="active">
        <h2>Zadanie do zrobienia</h2>
        {tasks}
      </div>
      <div className="non-active">
        <h2>Zadania zrobione (0)</h2>
        {/* {taskFinished} */}
      </div>
    </>
  );
};

export default TaskList;
