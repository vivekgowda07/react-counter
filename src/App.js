import { useState } from 'react';
import './App.css';


function App() {
  const [task,setTask] = useState([
    {id: 5271, name: "Record React Lectures", completed: true}, 
    {id: 7825, name: "Edit React Lectures", completed: false}, 
    {id: 8391, name: "Watch Lectures", completed: false}
  ]);

  const [show, setShow] = useState(true)

  function handleDelete(id){
    setTask(task.filter(task => task.id !== id))
  }

  return (
    <>
    <div className='App'>
      <ul>
        <button className='trigger' onClick={() => setShow(!show)}>trigger</button>
        {
         show && task.map((task) =>(
            <li key={task.id} className={task.completed ? "completed" : "incomplete"}>
              <span>{task.id}-{task.name}</span>
              <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
            </li>
          ))
        }
      </ul>
     
    </div>
    </>
  );
}

export default App;
