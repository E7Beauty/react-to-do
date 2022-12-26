import React from "react";
import './ToDoNotesItem.scss'

export default function ToDoNotesItem() {
  return (
    <div className="notes-list__note note">
      <span className="note__input">Text</span>
      <div className="note__buttons buttons">
        <button className="buttons__edit button">Edit</button>
        <button className="buttons__delete button">Delete</button>
      </div>
    </div>
  )
}