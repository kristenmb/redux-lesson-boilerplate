import React from 'react';
import { connect } from 'react-redux';
import ToDoCard from '../components/ToDoCard'

const ToDoList = ({todos}) => {
  const todoDisplay = todos.map(todo => {
    return (
      <ToDoCard
        key={todo.id}
        id={todo.id}
        todo={todo.text}
        completed={todo.completed}
      />
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