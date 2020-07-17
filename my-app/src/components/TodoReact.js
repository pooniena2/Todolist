import React,{Component} from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';


class TodoReact extends Component {
    


    //using mapping to display title where todo is a parameter refer to state
    render(){
        return this.props.todos.map((todo)=>(
            <TodoItems key = {todo.id} todo = {todo} markComplete = {this.props.markComplete} rmTodo={this.props.rmTodo} />
        ))
    }
  }
//proptypes
TodoReact.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete:PropTypes.func.isRequired,
    rmTodo:PropTypes.func.isRequired,
}
  
  export default TodoReact;
