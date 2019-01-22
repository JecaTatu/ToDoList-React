import React from "react";

function ToDo(props) {
  return (
    <div>
      <div>Titulo: {props.title}</div>
      <div>Descricao: {props.description} </div>
    </div>
  );
}

export default ToDo;
