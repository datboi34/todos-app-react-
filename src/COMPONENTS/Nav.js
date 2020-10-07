import React from "react";

function Nav(props) {
  return (
    <nav style={navbar.nav}>
      <a style={navbar.nav_a} href="#">
        <img style={props.Styles.avatar} src={props.user.image} />
        <p style={props.Styles.user}>{props.user.username}</p>
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
  );
}
export default Nav;

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
