export const addTodo = (todoList, newItem) => [...todoList, newItem]

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, todoList) => todoList.find(item => item.id === id)

export const editTodo = (todo) => ({...todo, isEditing: true})

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (todoList, updatedItem) => {
  const updatedIndex =todoList.findIndex(item => item.id === updatedItem.id)
  return[
    ...todoList.slice(0, updatedIndex),
    updatedItem,
    ...todoList.slice(updatedIndex+1)
  ]
}

export const updateEditedTodo = (todoList, updatedItem) => {
  const updatedIndex =todoList.findIndex(item => item.id === updatedItem.id)
  return[
    ...todoList.slice(0, updatedIndex),
    updatedItem,
    ...todoList.slice(updatedIndex+1)
  ]
}

export const removeTodo = (todoList, id) => {
  const removeIndex = todoList.findIndex(item => item.id === id)
  return[
    ...todoList.slice(0, removeIndex),
    ...todoList.slice(removeIndex+1)
  ]
}

export const filterTodos = (todoList, route) => {
  switch(route){
    case '/active':
      return todoList.filter(item => !item.isComplete)
    case '/complete':
      return todoList.filter(item => item.isComplete)
    default:
      return todoList
  }
}



