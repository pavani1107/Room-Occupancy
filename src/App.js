import logo from './logo.svg';
import React,{ useState } from "react"
import './App.css';
import {Login} from "./Login"
import {Register} from "./Register"

function App() {
  const [currentForm, setForm]=useState('login')
  const toggleForm = (formName)=> {
    setForm( formName);
  }
  return (
    <div className="App">
      {
        currentForm ==="login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
