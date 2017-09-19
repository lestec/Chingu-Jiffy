const baseUrl = 'http://localhost:3000/focus'

export const loadFocus = () =>{
  return fetch(baseUrl)
    .then(res => res.json())
}

export const createFocus = (focus) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(focus)
  }).then(res => res.json())

}

export const saveFocus = (focus) => {
  return fetch(`${baseUrl}/${focus.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(focus)
  }).then(res => res.json())

}

export const destroyTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })

}
