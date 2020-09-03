import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="TopNav">
        <h1 className="h1-style">Welcome to BugFree
          <FontAwesomeIcon className="icon-style" icon={faCodeBranch} spin />
        </h1>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
            className="Button-style"
          >
            LOGIN
          </button>
      </header>
    </div>
  );
}

export default App;
