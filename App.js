import logo from './interviewPicture.png';
import './App.css';
import React from 'react';
import './logo.svg'



function App() {

  return (
    <div className="App">
      <nav id='navList'>
      <hr></hr>
        <ul className='aList'>
          <li className='abList'><img id='ListLogo' src={logo} alt='Logo' /></li>
          <li className='abList' id='abcList'><b>Incidents</b></li>
          <li className='abList' id='abcList'>NOC Tools</li>
          <li className='abList' id='abcList'>Settings</li>
          <li className='abList'><input id='ListSearch' placeholder='  🔍  Search'></input></li>
          <li className='abList'><button id='ListButton'><b>Report Event</b></button></li>
          <li className='abList' id='abcList'>Welcome, <b>John Smith</b></li>
        </ul>
        <hr></hr>
      </nav>
    </div>
  );
}

export default App;
