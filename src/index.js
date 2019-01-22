import React from "react";
import ReactDOM from "react-dom";

import ToDo from "./ToDo";
import ToDoList from "./ToDoList";
import Form from "./Form";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { title: "1", description: "desc 1" },
        { title: "2", description: "desc 2" },
        { title: "3", description: "desc 3" }
      ],
      last: null
    };

    this.addToDo = this.addToDo.bind(this);
    this.removeToDo = this.removeToDo.bind(this);
  }

  addToDo(title, description) {
    const newItem = {
      title: title,
      description: description
    };

    this.setState(function(state) {
      return {
        list: state.list.concat([newItem]),
        last: newItem
      };
    });
  }

  removeToDo(index) {
    this.setState(function(state) {
      return {
        list: state.list.filter(function(item, idx) {
          return index !== idx;
        })
      };
    });
  }
  render() {
    return (
      <div>
        <ToDoList list={this.state.list} handler={this.removeToDo} />
        <Form handler={this.addToDo} />
        {this.state.last && (
          <ToDo
            title={this.state.last.title}
            description={this.state.last.description}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
