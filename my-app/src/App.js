import React, { Component } from "react";
import TodoReact from "./components/TodoReact";
import "./App.css";
import Header from "./components/layout/Header";
import TodoAdd from "./components/TodoAdd";
import uuid from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/page/About";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //     .then((res) => this.setState({ todos: res.data }));


  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  rmTodo = (id) => {
    this.setState({todos:[...this.state.todos.filter(todo=>todo.id !==id)]});
  }

  TodoAdd = (title) => {
    const task = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, task]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact path="/" 
              render={(props) => (
                <React.Fragment>
                  <TodoAdd TodoAdd={this.TodoAdd} />
                  <TodoReact
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    rmTodo={this.rmTodo}
                  />{" "}
                </React.Fragment>
              )}
            />
            <Route path="/About" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
