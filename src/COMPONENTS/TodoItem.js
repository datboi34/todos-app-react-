import React from "react";

function TodoItem(props) {
  return (
    <>
      <li style={props.universal.ul}>
        <p style={props.universal.ul}>{props.todoList.description}</p>
        <input
          style={props.universal.ul}
          type="checkbox"
          checked={props.todoList.completed}
        />
      </li>
    </>
  );
}

export default TodoItem;
