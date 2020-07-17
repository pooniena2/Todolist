import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItems extends Component {
  getStyle = () => {
    return {
      background: "#F6F6F6",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  buttonStyle = () => {
    return {
      background: "#ff0000",
      color: "#fff",
      border: "none",
      padding: "5px   8px",
      BorderRadius: "50%",
      cursor: "pointer",
      float: "right",
    };
  };

  markComplete = (e) => {
    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {""}
          {title}

          <button
            onClick={this.props.rmTodo.bind(this, id)}
            style={this.buttonStyle()}
          >
            {" "}
            x{" "}
          </button>
        </p>
      </div>
    );
  }
}

//proptypes
TodoItems.propTypes = {
  todos: PropTypes.object.isRequired,
  markComplete:PropTypes.func.isRequired,
  rmTodo:PropTypes.func.isRequired,
};

export default TodoItems;
