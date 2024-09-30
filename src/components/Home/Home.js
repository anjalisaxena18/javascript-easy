import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
      <h1 className="text-5xl text-white mb-10">the-basic</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full max-w-4xl px-4">
        <Link to="/calculator" className="card">
          <span className="text-8xl">🧮</span>
          <h2 className="text-xl text-white">Calculator</h2>
        </Link>
        <Link to="/todolist" className="card">
          <span className="text-8xl">📝</span>
          <h2 className="text-xl text-white">To-Do List</h2>
        </Link>
        <Link to="/tempconverter" className="card">
          <span className="text-8xl">🌡️</span>
          <h2 className="text-xl text-white">Temperature Converter</h2>
        </Link>
        <Link to="/pomodoro" className="card">
          <span className="text-8xl">⏰</span>
          <h2 className="text-xl text-white">Pomodoro Clock</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
