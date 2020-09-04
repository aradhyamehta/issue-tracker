import React from 'react';
import image from "./sample.jpg";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

function shoot() {
  alert("Great Shot!");
}

function App() {
  return (
    <div className="App">
      <div className="TopNav">
        <h1 className="h1-style">Welcome to BugFree
          <a className="click-style" href="https://github.com/aradhyamehta/issue-tracker.git"><FontAwesomeIcon className="icon-style" icon={faCodeBranch} spin /></a>
        </h1>
      </div>
      
      <header className="App-header">
        <div className="LeftBody">
      <h3>BugFree is a software development tool to view & store all your programming issues.</h3>
      <h3>BugFree is a software development tool to view & store all your programming issues.</h3>
      <button className="button-style" onClick={shoot}>ENTER HERE</button>
      </div>
      <div className="RightBody">
        <img src={image} className="App-logo" alt="logo" />
      </div>
      </header>
    </div>
  );
}

export default App;
