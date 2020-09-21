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
      <nav style={navbar.nav}>
        <a style={navbar.nav_a} href="#">
          <img style={Styles.avatar} src={user.image} />
          <p style={Styles.user}>{user.username}</p>
        </a>
        <a style={navbar.nav_a} href="#">
          Completed
        </a>
        <a style={navbar.nav_a} href="#">
          Options
        </a>
        <a style={navbar.nav_a} href="#">
          Contact
        </a>
      </nav>
      <div style={Styles.todo_list}>
        <h1>Todo List</h1>
        <ul style={universal.ul}>
          {todoList.map((todo) => {
            return (
              <li style={universal.ul}>
                <p style={universal.ul}>{todo.description}</p>
                <input
                  style={universal.ul}
                  type="checkbox"
                  checked={todoList.completed}
                />
              </li>
            );
          })}
        </ul>
        <a href="#">
          <img
            style={img.plusImg}
            src="https://img.icons8.com/ios-filled/100/000000/plus.png"
          />
        </a>
      </div>

      <footer>
        <h4 style={universal.footer}> Icons obtained from:</h4>
        <a
          style={universal.footer}
          href="https://icons8.com/icon/46393/cat-profile"
        >
          Cat Profile iconbyIcons8
          <br></br>
        </a>
        <a style={universal.footer} href="https://icons8.com/icon/11255/plus">
          Plus icon by Icons8
        </a>
      </footer>
    </>
  );
}
const universal = {
  h1: {
    margintop: "5px",
  },
  li: {
    listStyle: "none",
  },
  ul: {
    margin: "10px",
  },
  footer: {
    marginLeft: "200px",
  },
};

const navbar = {
  nav: {
    height: "100%",
    width: "160px",
    position: "fixed",
    backgroundColor: "white",
    top: "0",
  },
  nav_a: {
    padding: "6px 8px 6px 16px",
    textDecoration: "none",
    fontSize: "25px",
    color: "black",
    display: "block",
    borderBottom: "solid black 2px",
    borderRight: "solid black 2px",
  },
  nav_a_hover: {
    color: "blue",
  },
};

const img = {
  plusImg: {
    marginTop: "50px",
    marginLeft: "50px",
  },
};

const Styles = {
  user: {
    textAlign: "center",
    margin: "0",
  },
  avatar: {
    marginTop: "20px",
    marginLeft: "35px",
    marginBottom: "7px",
  },
  todo_list: {
    textAlign: "center",
  },
};
export default App;
