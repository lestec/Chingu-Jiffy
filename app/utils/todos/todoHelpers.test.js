import {addTodo, findById, toggleTodo, updateTodo, removeTodo, filterTodos, editTodo, updateEditedTodo} from './todoHelpers'

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false, isEditing: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).toEqual(expected)
})

test('addTodo should not mutate the existing todo array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false}
  ]
  const newTodo = {id: 3, name: 'three', isComplete: false, isEditing: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)
})

test('findById should return the expected item from an array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]
  const expected = {id: 2, name: 'two', isComplete: false, isEditing: false}
  const result = findById(2, startTodos)
  expect(result).toEqual(expected)
})

test('toggleTodo should toggle the isComplete prop of a todo', () => {
  const startTodo = {id: 2, name: 'two', isComplete: false, isEditing: false}
  const expected = {id: 2, name: 'two', isComplete: true, isEditing: false}
  const result = toggleTodo(startTodo)
  expect(result).toEqual(expected)
})

test('toggleTodo should not mutate the original todo', () => {
  const startTodo = {id: 2, name: 'two', isComplete: false, isEditing: false}
  const result = toggleTodo(startTodo)
  expect(result).not.toBe(startTodo)
})

test('editTodo should toggle the isEditing prop of a todo', () => {
  const startTodo = {id: 2, name: 'two', isComplete: false, isEditing: false}
  const expected = {id: 2, name: 'two', isComplete: false, isEditing: true}
  const result = editTodo(startTodo)
  expect(result).toEqual(expected)
})

test('editTodo should not mutate the original todo', () => {
  const startTodo = {id: 2, name: 'two', isComplete: false, isEditing: false}
  const result = editTodo(startTodo)
  expect(result).not.toBe(startTodo)
})

test('updateTodo should update an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]
  const updatedTodo = {id: 2, name: 'two', isComplete: true, isEditing: false}
  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: true, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]

  const result = updateTodo(startTodos, updatedTodo)

  expect(result).toEqual(expectedTodos)
})

test('updateTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]
  const updatedTodo = {id: 2, name: 'two', isComplete: true, isEditing: false}

  const result = updateTodo(startTodos, updatedTodo)

  expect(result).not.toBe(startTodos)
})

test('updateEditedTodo should update an edited item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]
  const updatedEditedTodo = {id: 2, name: 'two', isComplete: false, isEditing: true}
  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: true},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]

  const result = updateEditedTodo(startTodos, updatedEditedTodo)

  expect(result).toEqual(expectedTodos)
})

test('updateEditedTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]
  const updatedEditedTodo = {id: 2, name: 'two', isComplete: true, isEditing: false}

  const result = updateEditedTodo(startTodos, updatedEditedTodo)

  expect(result).not.toBe(startTodos)
})

test('removeTodo should remove an item by id', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]
  const targetId = 2
  const expectedTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]
  const result = removeTodo(startTodos, targetId)

  expect(result).toEqual(expectedTodos)
})

test('removeTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name: 'one', isComplete: false, isEditing: false},
    {id: 2, name: 'two', isComplete: false, isEditing: false},
    {id: 3, name: 'three', isComplete: false, isEditing: false}
  ]
  const targetId = 2
  const result = removeTodo(startTodos, targetId)

  expect(result).not.toBe(startTodos)
})

test('filterTodos should return all items for the root route', () => {
  const startTodos = [
    {id:1, name: 'one', isComplete: false, isEditing: false},
    {id:2, name: 'two', isComplete: true, isEditing: false},
    {id:3, name: 'three', isComplete: false, isEditing: false}
  ]

  const result = filterTodos(startTodos, '/')

  expect(result).toEqual(startTodos)
})

test('filterTodos should return only completed items for the complete route', () => {
  const startTodos = [
    {id:1, name: 'one', isComplete: false, isEditing: false},
    {id:2, name: 'two', isComplete: true, isEditing: false},
    {id:3, name: 'three', isComplete: false, isEditing: false}
  ]
  const expected = [
    {id:2, name: 'two', isComplete: true, isEditing: false}
  ]

  const result = filterTodos(startTodos, '/complete')

  expect(result).toEqual(expected)
})

test('filterTodos should return only incompleted items for the active route', () => {
  const startTodos = [
    {id:1, name: 'one', isComplete: false, isEditing: false, isEditing: false, isEditing: false, isEditing: false, isEditing: false},
    {id:2, name: 'two', isComplete: true, isEditing: false, isEditing: false, isEditing: false, isEditing: false},
    {id:3, name: 'three', isComplete: false, isEditing: false, isEditing: false, isEditing: false}
  ]
  const expected = [
    {id:1, name: 'one', isComplete: false, isEditing: false, isEditing: false},
    {id:3, name: 'three', isComplete: false, isEditing: false}
  ]

  const result = filterTodos(startTodos, '/active')

  expect(result).toEqual(expected)
})
