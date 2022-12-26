import './ToDoInput.scss';

const ToDoInput = () => {
  return (
    <div className="container__new-note new-note">
      <input className="new-note__input input" />

      <button type="submit" className="new-note__submit button">Submit</button>
    </div>
  )
}

export default function ToDoInput();