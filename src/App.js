import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </div>
    </div>
  );
}

export default App;
