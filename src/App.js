import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav class="nav">
        <a href="#">
          <img
            class="avatar"
            src="https://img.icons8.com/dusk/64/000000/cat-profile.png"
          />
        </a>
        <a href="#">Completed</a>
        <a href="#">Options</a>
        <a href="#">Contact</a>
      </nav>
      <div class="todo-list">
        <h1>Todo List</h1>
        <ul class="Weekly-duties">
          <li>
            <input type="checkbox" />
            Buy eggs
          </li>
          <li>
            {" "}
            <input type="checkbox" />
            Bacon eat
          </li>
          <li>
            {" "}
            <input type="checkbox" />
            Go to the bank
          </li>
        </ul>
        <a href="#">
          <img
            class="add-todo"
            src="https://img.icons8.com/ios-filled/100/000000/plus.png"
          />
        </a>
      </div>

      <footer>
        <h4> Icons obtained from:</h4>
        <a href="https://icons8.com/icon/46393/cat-profile">
          Cat Profile iconbyIcons8
          <br></br>
        </a>
        <a href="https://icons8.com/icon/11255/plus">Plus icon by Icons8</a>
      </footer>
    </>
  );
}

export default App;
