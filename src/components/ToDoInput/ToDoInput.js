import { useState } from 'react'
import './ToDoInput.scss'

const ToDoInput = ({ onCreate }) => {
  const [value, setValue] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form className="container__new-note new-note" onSubmit={submitHandler}>
      <input
        className="new-note__input input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button type="submit" className="new-note__submit button">
        Submit
      </button>
    </form>
  )
}

export default ToDoInput
