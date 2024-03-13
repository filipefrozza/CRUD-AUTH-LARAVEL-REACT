// import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
// import Rastreio from './rastreio/Rastreio';
import Platform from './platform/Platform';

function App() {
  useEffect(() => {
    document.title = "CRUD Laravel / React";
  }, []);
  
  return (
    <div className="App">
      <Platform />
    </div>
  );
}

export default App;
