export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})