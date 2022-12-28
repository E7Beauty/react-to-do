import './ToDoNotesItem.scss'
import Context from '../../context'
import { useContext } from 'react'

const ToDoNotesItem = ({ todo, onEditClick}) => {
  const {removeToDo} = useContext(Context)

  return (
    <div className="notes-list__note note">
      <span className="note__input">{todo.title}</span>
      
      <div className="note__buttons buttons">
        <button className="buttons__edit button" onClick={() => onEditClick(todo.id)}>Edit</button>

        <button className="buttons__delete button" onClick={() => removeToDo(todo.id)}>Delete</button>
      </div>
    </div>
  )
}

export default ToDoNotesItem