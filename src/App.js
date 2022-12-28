import React, { useEffect } from 'react';
import './App.scss'
import ToDoNotes from './components/ToDoNotes/ToDoNotes'
import ToDoInput from './components/ToDoInput/ToDoInput'
import Context from './context';
import Loader from './components/Loader/Loader';

const App = () => {
  const [todos, setToDos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos?_limit=3')
      .then(response => response.json())
      .then(todos => setTimeout(() => {
        setToDos(todos) 
        setLoading(false)}
        , 1000))
  }, [])

  const editToDo = (id) => { //does not work yet
    setToDos(
      todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        console.log(item)
        return item
      })
    )
  }

  const addToDo = (title) => {
    setToDos(todos.concat([{
      id: Date.now(),
      title,      
      completed: false
    }]))

  }

  const removeToDo = (id) => setToDos(todos.filter(item => item.id !== id))

  return (
    <Context.Provider value={{removeToDo}}>
      <div className="container">
        <h1>やることリスト</h1>  

        <ToDoInput onCreate={addToDo} />

        {loading && <Loader />}

        {todos.length ? (<ToDoNotes todos={todos} onEdit={editToDo} />) 
        : loading ? null : (<h2>Enter your Note</h2>)}        
      </div>
    </Context.Provider>
  );
}

export default App