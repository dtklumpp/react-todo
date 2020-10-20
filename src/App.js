import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home.js';
import TodosContainer from './components/TodosContainer.js';
import Header from './components/Header.js';
import Routes from './config/Routes';


function App() {
  return (
    <div className="container">
      <h2>Hello World</h2>
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
