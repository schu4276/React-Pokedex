
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import Dashboard from './components/layout/Dashboard.js';



function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="container">
          <Dashboard/> 
        </div> 
    </div>
  );
}

export default App;
