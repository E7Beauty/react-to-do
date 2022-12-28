import ToDoNotesItem from "../ToDoNotesItem/ToDoNotesItem";
import './ToDoNotes.scss'

const ToDoNotes = (props) => {
  return (
    <div className="container__notes notes-list">
      {props.todos.map(item => <ToDoNotesItem todo={item} key={item.id } onEditClick={props.onEdit}/>)}
      
    </div>   
  )
}

export default ToDoNotes