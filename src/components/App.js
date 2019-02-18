import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 0,
          text: 'zagrać w gre',
          date: '2019-02-15',
          impotant: true,
          active: true,
          finishDate: null
        },
        {
          id: 1,
          text: 'kupic gre',
          date: '2019-02-01',
          impotant: false,
          active: true,
          finishDate: null
        },
        {
          id: 2,
          text: 'isc do domu',
          date: '2019-01-15',
          impotant: true,
          active: false,
          finishDate: null
        },
      ]
    };
  }

  deleteTask = (id) => {
    console.log("delete" + id);
  }

  handleChangeActice = (id) => {
    console.log("zmien taska" + id)
  }

  render() {
    const { tasks } = this.state

    return (
      <div className="App">
        Todo list
        <AddTask />
        <hr/>
        <TaskList tasks={tasks} deleted={this.deleteTask} done={this.handleChangeActice}/>
      </div>
    );
  }
}

export default App;
