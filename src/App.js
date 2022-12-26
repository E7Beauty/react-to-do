import './App.scss'
import ToDoNotes  from './components/ToDoNotes/ToDoNotes'
import ToDoInput from './components/ToDoInput/ToDoInput'

function App() {
  return (
    <div className="container"> 
    <ToDoNotes />   
    <ToDoInput />   
    </div>   
  );
}

export default App;
