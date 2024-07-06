import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DismissedUsersPage from './pages/DismissedUsersPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dismissed">Dismissed Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dismissed" element={<DismissedUsersPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
