import React from "react";
function Footer(props) {
  return (
    <footer>
      <h4 style={props.universal.footer}> Icons obtained from:</h4>
      <a
        style={props.universal.footer}
        href="https://icons8.com/icon/46393/cat-profile"
      >
        Cat Profile iconbyIcons8
        <br></br>
      </a>
      <a
        style={props.universal.footer}
        href="https://icons8.com/icon/11255/plus"
      >
        Plus icon by Icons8
      </a>
    </footer>
  );
}
export default Footer;
