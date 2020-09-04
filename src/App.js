import React from "react";
import "./App.css";

const todoList = [
  {
    id: 1,
    title: "Skateboard",
    description: "Go skateboarding",
    completed: false,
  },
  {
    id: 2,
    title: "Bike",
    description: "Go biking",
    completed: false,
  },
  {
    id: 3,
    title: "Fish",
    description: "Go fishing",
    completed: false,
  },
];
const user = {
  username: "Freddy",
  image: "https://img.icons8.com/dusk/64/000000/cat-profile.png",
};
function App() {
  return (
    <>
      <nav className="nav">
        <a href="#">
          <img className="avatar" src={user.image} />
          <p className="user">{user.username}</p>
        </a>
        <a href="#">Completed</a>
        <a href="#">Options</a>
        <a href="#">Contact</a>
      </nav>
      <div className="todo-list">
        <h1>Todo List</h1>
        <ul class="Weekly-duties">
          {todoList.map((todo) => {
            return (
              <li>
                <p>{todo.description}</p>
                <input type="checkbox" />
              </li>
            );
          })}
        </ul>
        <a href="#">
          <img
            className="add-todo"
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
