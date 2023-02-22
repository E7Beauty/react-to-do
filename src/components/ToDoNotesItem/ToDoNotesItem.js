import './ToDoNotesItem.scss'
import { useState } from 'react'

const ToDoNotesItem = ({ todo, onRemoveClick, onEditAccept, onEditClick }) => {
  const [value, setValue] = useState('')
  const [editTag, setEditTag] = useState(true)

  const onCancelClick = () => {
    setEditTag(true)
  }

  const onEdit = (event) => {
    event.preventDefault()
    onEditAccept(value)
    setEditTag(true)
  }

  return (
    <div>
      {editTag ? (
        <div className="notes-list__note note">
          <p className="note__input note__input-p">{todo.title}</p>

          <div className="note__buttons buttons">
            <button
              className="buttons__edit button"
              onClick={() => {
                onEditClick(todo.id)
                setValue(todo.title)
                setEditTag(false)
              }}
            >
              Edit
            </button>

            <button
              className="buttons__delete button"
              onClick={() => onRemoveClick(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <form className="notes-list__note note" onSubmit={onEdit}>
          <input
            type="text"
            className="note__input note__input-input"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          <div className="note__buttons buttons">
            <button className="button" type="submit">
              Accept
            </button>

            <button className="button" type="button" onClick={onCancelClick}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default ToDoNotesItem
