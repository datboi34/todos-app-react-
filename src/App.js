import React from "react";
import "./App.css";
import Nav from "./COMPONENTS/Nav";
import Footer from "./COMPONENTS/Footer";
import TodoItem from "./COMPONENTS/TodoItem";

class App extends React.Component {
  state = {
    user: {
      username: "Freddy",
      image: "https://img.icons8.com/dusk/64/000000/cat-profile.png",
    },
    todoList: [
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
    ],
    newTodoDescription: "",
  };
  handleChangeTodo = (event) => {
    const value = event.target.value;
    this.setState({ newTodoDescription: value });
  };
  handleAddNewTodo = () => {
    this.setState((state) => {
      return {
        todoList: [
          ...state.todoList,
          { id: 3, description: state.newTodoDescription, completed: false },
        ],
      };
    });
  };
  render() {
    return (
      <>
        <Nav user={this.state.user} Styles={Styles} />
        <div style={Styles.todo_list}>
          <h1>Todo List</h1>
          <ul style={universal.ul}>
            {this.state.todoList.map((todo) => {
              return <TodoItem universal={universal} todoList={todo} />;
            })}
          </ul>

          <input
            type="text"
            onChange={this.handleChangeTodo}
            value={this.state.newTodoDescription}
          ></input>
          <button onClick={this.handleAddNewTodo} style={Styles.newIteminput}>
            {" "}
            Add New Todo{" "}
          </button>
        </div>

        <Footer universal={universal} />
      </>
    );
  }
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
    marginTop: "100px",
    marginLeft: "100px",
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
  newIteminput: {
    marginTop: "50px",
  },
};

export default App;
