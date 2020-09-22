import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App(props) {
  return <div className = "bg">
      Hello World from App.js <br></br>
      Greetings from {props.name}
      and my age is {2020 - props.age}
    </div>
}

export default App;
