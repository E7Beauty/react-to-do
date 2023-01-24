import { useEffect, useState } from 'react'
import ToDoNotes from './ToDoNotes/ToDoNotes'
import ToDoInput from './ToDoInput/ToDoInput'
import Loader from './Loader/Loader'
import '../App.scss'

const Main = () => {
  const [todos, setToDos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos?_limit=2')
      .then((response) => response.json())
      .then((todos) =>
        setTimeout(() => {
          setToDos(todos)
          setLoading(false)
        }, 1000)
      )
  }, [])

  const editToDo = (title) => {
    setToDos(
      todos.map((item) => {
        if (item.completed) {
          item.title = title
        }
        return item
      })
    )
  }

  const addToDo = (title) => {
    setToDos([
      ...todos.concat([
        {
          userId: 1,
          id: Date.now(),
          title,
          completed: false,
        },
      ]),
    ])
  }

  const onEditClick = (id) => {
    setToDos(
      todos.map((item) => {
        item.completed = item.id === id;
        // if (item.id === id) {
        //   item.completed = true
        // } else {
        //   item.completed = false
        // }
        return item
      })
    )
  }

  const removeToDo = (id) => setToDos(todos.filter((item) => item.id !== id))

  return (
    <div className="container">
      <h1>やることリスト</h1>

      <ToDoInput onCreate={addToDo} />

      {loading && <Loader />}

      {todos.length ? (
        <ToDoNotes
          todos={todos}
          onRemove={removeToDo}
          onEdit={editToDo}
          onEditClick={onEditClick}
        />
      ) : (
        !loading && <h2>Enter your Note</h2>
      )}
    </div>
  )
}

export default Main
