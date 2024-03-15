import {BrowserRouter as Router,Route , Routes } from "react-router-dom";
import React from "react";
import './App.css'
import Navbar from './component/Navbar';
import Home from "./component/Home/HomeScreen/"


function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
  
}

export default App
