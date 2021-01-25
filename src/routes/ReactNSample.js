import { useEffect } from 'react'
import React, { setGlobal, addReducer, useGlobal, useDispatch } from 'reactn'
import immer from 'immer'

const sampleTodos = [
  {
    "id": 1,
    "title": "Grocery shopping",
    "completed": false
  },
  {
    "id": 2,
    "title": "Pick up the kids",
    "completed": true
  },
  {
    "id": 3,
    "title": "Purchase airline ticket",
    "completed": false
  },
  {
    "id": 4,
    "title": "Get new tires",
    "completed": false
  },
  {
    "id": 5,
    "title": "Schedule dentist appointment",
    "completed": true
  } 
];

setGlobal({
  todoIds: [],
  todoData: {},
  filter: {},
  loading: false,
})

addReducer('completeTodo', (global, _, id) => immer(global, draft => {
  draft.todoData[id].completed = true;
}))

addReducer('fillTodos', (global, _, todos) => immer(global, draft => {
  todos.forEach(todo => {
    draft.todoIds.push(todo.id)
    draft.todoData[todo.id] = todo
  })
}))

addReducer('setLoading', (global, _, loading) => immer(global, draft => {
  draft.loading = loading
}))

addReducer('loadTodos', async (_, dispatch) => {
  // simulate network delay
  await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  await dispatch.fillTodos(sampleTodos)
})

const ReactNSample = () => {
  const [todoIds] = useGlobal('todoIds')
  const [todoData] = useGlobal('todoData')
  const [loading, setLoading] = useGlobal('loading')
  const loadTodos = useDispatch('loadTodos')
  const completeTodo  = useDispatch('completeTodo')

  useEffect(() => {
    setLoading(true)
    loadTodos().then(() => {
      setLoading(false)
    })
  }, [])

  return (loading ? (
    <div>Loading</div>
  ) : (
    <div>{todoIds.map((id) => (
        todoData[id].completed ? (
          <p key={id}>{todoData[id].title}</p>
        ) : (
          <p key={id} onClick={() => completeTodo(id)}>
            {todoData[id].title}
          </p>
        )
    ))}</div>
  ))
}

export default ReactNSample
