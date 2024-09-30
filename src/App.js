import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Calculator from './components/Calculator/Calculator';
import ToDoList from './components/ToDoList/ToDoList';
import TempConverter from './components/TempConverter/TempConverter';
import PomodoroClock from './components/Clock/PomodoroClock';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/tempconverter" element={<TempConverter />} />
          <Route path="/pomodoro" element={<PomodoroClock />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
