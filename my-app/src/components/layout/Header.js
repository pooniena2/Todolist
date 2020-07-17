import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {


  render() {
    return (
      <div>
        <header>
          <h1>To do List</h1>
          <Link style={linkstyle} to="/"> Home </Link> | <Link style={linkstyle} to="/about"> About </Link>
        </header>
      </div>
    );
  }
}

const linkstyle = {
  color: "blue",
  textDecoration: 'none',

}
export default Header;
