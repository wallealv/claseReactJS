import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <header className="App-body">
        <Navbar />
      </header>
      <body className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Alvaro 
        </p>
        <a
          className="App-link"
          href="https://github.com/wallealv/claseReactJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio de github
        </a>
      </body>
    </div>
  );
}

export default App;
