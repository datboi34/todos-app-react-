import React from "react";
import "./App.css";
import Nav from "./COMPONENTS/Nav";
import Footer from "./COMPONENTS/Footer";
import TodoItem from "./COMPONENTS/TodoItem";

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

function App() {
  return (
    <>
      <Nav user={user} Styles={Styles} />
      <div style={Styles.todo_list}>
        <h1>Todo List</h1>
        <ul style={universal.ul}>
          {todoList.map((todo) => {
            return <TodoItem universal={universal} todoList={todo} />;
          })}
        </ul>
        <a href="#">
          <img
            style={img.plusImg}
            src="https://img.icons8.com/ios-filled/100/000000/plus.png"
          />
        </a>
      </div>

      <Footer universal={universal} />
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

const user = {
  username: "Freddy",
  image: "https://img.icons8.com/dusk/64/000000/cat-profile.png",
};
export default App;
