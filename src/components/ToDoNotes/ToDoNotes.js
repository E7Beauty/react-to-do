import React from "react";
import ToDoNotesItem from "../ToDoNotesItem/ToDoNotesItem";
import './ToDoNotes.scss'

export default function ToDoNotes() {
  return (
    <div className="container__notes notes-list">
      <ToDoNotesItem />
      <ToDoNotesItem />
    </div>   
  )
}