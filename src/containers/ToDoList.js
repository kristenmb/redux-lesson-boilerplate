import React from 'react';
import { connect } from 'react-redux';
import ToDoCard from '../components/ToDoCard'

const ToDoList = ({todos, showAll, showActive, showCompleted}) => {
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
     <section>
      <button onClick={() => showAll()}>All</button>
      <button onClick={() => showActive()}>Active</button>
      <button onClick={() => showCompleted()}>Done</button>
      <ul>
        {todoDisplay}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoList);