import {addFocus, findById, toggleItem, updateItem, removeItem} from './focusHelpers'

test('addFocus should add the passed focus item to the list', () => {
  const startList = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newFocus = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addFocus(startList, newFocus)

  expect(result).toEqual(expected)
})

test('addFocus should not mutate the existing item array', () => {
  const startList = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false}
  ]
  const newFocus = {id: 3, name: 'three', isComplete: false}
  const expected = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]

  const result = addFocus(startList, newFocus)

  expect(result).not.toBe(startList)
})

test('findById should return the expected item from an array', () => {
  const startList = [
    {id: 1, name: 'one', isComplete: false},
    {id: 2, name: 'two', isComplete: false},
    {id: 3, name: 'three', isComplete: false}
  ]
  const expected = {id: 2, name: 'two', isComplete: false}
  const result = findById(2, startList)
  expect(result).toEqual(expected)
})

test('toggleItem should toggle the isComplete prop of a focus item', () => {
  const startList = {id: 2, name: 'two', isComplete: false}
  const expected = {id: 2, name: 'two', isComplete: true}
  const result = toggleItem(startList)
  expect(result).toEqual(expected)
})

test('toggleItem should not mutate the original item', () => {
  const startList = {id: 2, name: 'two', isComplete: false}
  const result = toggleItem(startList)
  expect(result).not.toBe(startList)
})

test('updateItem should update an item by id', () => {
  const startList = [
    {id: 1, name: 'one', isComplete: false}
  ]
  const updatedItem = {id: 1, name: 'one', isComplete: true}
  const expected = [
    {id: 1, name: 'one', isComplete: true}
  ]

  const result = updateItem(startList, updatedItem)

  expect(result).toEqual(expected)
})

test('updateItem should not mutate the original array', () => {
  const startList = [
    {id: 1, name: 'one', isComplete: false}
  ]
  const updatedItem = {id: 1, name: 'one', isComplete: true}

  const result = updateItem(startList, updatedItem)

  expect(result).not.toBe(startList)
})

test('removeItem should remove an item by id', () => {
  const startList = [
    {id: 1, name: 'one', isComplete: false},
  ]
  const targetId = 1
  const expected = []
  const result = removeItem(startList, targetId)

  expect(result).toEqual(expected)
})

test('removeItem should not mutate the original array', () => {
  const startList = [
    {id: 1, name: 'one', isComplete: false},
  ]
  const targetId = 1
  const result = removeItem(startList, targetId)

  expect(result).not.toBe(startList)
})

