import ToDoNotesItem from "../ToDoNotesItem/ToDoNotesItem";
import './ToDoNotes.scss'

const ToDoNotes = () => {
  return (
    <div className="container__notes notes-list">
      <ToDoNotesItem />
      <ToDoNotesItem />
    </div>   
  )
}

export default function ToDoNotes()