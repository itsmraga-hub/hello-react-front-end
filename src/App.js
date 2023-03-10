import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Greeting from './components/Greeting';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
