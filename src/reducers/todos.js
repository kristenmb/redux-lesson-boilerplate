export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.todo, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    case 'SHOW_ALL':
      return state
    case 'SHOW_ACTIVE':
      const activeTodos = state.filter(todo => {
        return !todo.completed
      })
      return activeTodos
    case 'SHOW_COMPLETED':
      const completedTodos = state.filter(todo => {
        return todo.completed
      })
      return completedTodos
    default:
      return state;
  }
}