export const generateId = () => Math.floor(Math.random()*100000)

export const addFocus = (focusList, newItem) => [...focusList, newItem]

export const findById = (id, focusList) => focusList.find(item => item.id === id)

export const toggleItem = (item) => ({...item, isComplete: !item.isComplete})

export const removeItem = (focusList, id) => {
  const removeIndex = focusList.findIndex(item => item.id === id)
  return []
}

export const updateItem = (focusList, updatedItem) => {
  const updatedIndex =focusList.findIndex(item => item.id === updatedItem.id)
  return[updatedItem]
}
