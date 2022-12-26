import React from "react";
import './ToDoInput.scss';

export default function ToDoInput() {
  return (
    <div className="container__new-note new-note">
      <input className="new-note__input input" />
      <button type="submit" className="new-note__submit button">Submit</button>
    </div>
  )
}