import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        Todo list
        <AddTask />
        <hr/>
        <TaskList />
      </div>
    );
  }
}

export default App;
