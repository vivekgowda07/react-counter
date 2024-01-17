import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [counter,setCounter] = useState(0);

  function handleAdd(){
    setCounter(
      counter+1
    )
    }
    function handleSub(){
      setCounter(
        counter-1
      )  
  }
  function handleReset(){
    setCounter(0)
}

  return (
    <>
    <div className='App'>
      <div className="box">
        <p>{counter}</p>
        <button onClick={handleAdd} className='add' name="button">Add</button>
        <button onClick={handleSub} className='sub' name="button">Sub</button>
        <button onClick={handleReset} className='reset' name="button">Reset</button>
      </div>
    </div>
    </>
  );
}

export default App;
