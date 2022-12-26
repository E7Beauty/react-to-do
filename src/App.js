import './App.scss'
import ToDoNotes from './components/ToDoNotes/ToDoNotes'
import ToDoInput from './components/ToDoInput/ToDoInput'

const App = () => {
  return (
    <div className="container">
      <ToDoInput />

      <ToDoNotes />      
    </div>
  );
}

export default App;
