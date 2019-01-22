import React from "react";

import ToDo from "./ToDo";

function renderItem(item, idx, handler) {
  function foo() {
    handler(idx);
  }

  return (
    <div key={idx} className="todo-list-item">
      <ToDo title={item.title} description={item.description} />
      <div>
        <button onClick={foo}>Remover</button>
      </div>
    </div>
  );
}

function ToDoList(props) {
  const list = props.list;
  return list.map(function(item, idx) {
    return renderItem(item, idx, props.handler);
  });
}

export default ToDoList;
