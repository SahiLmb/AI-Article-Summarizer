import React from 'react'

import Actual from './components/Actual';
import Demo from './components/Demo';

import './App.css';

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
        </div>

        <div className="app">
          <Actual />
          <Demo />
        </div>
      </main>
  )
}

export default App