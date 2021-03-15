import React from 'react';
import { connect } from 'react-redux';

const ToDoList = ({todos}) => {
  console.log(todos);
  const todoDisplay = todos.map((todo, i) => {
    return (
      <li
        key={i}
        checked={todo.completed}>
      {todo.text}
      </li>
    )
  })
  return (
    <ul>
      {todoDisplay}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);