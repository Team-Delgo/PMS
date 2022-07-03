import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ReservationManagement from './pages/ReservationManagement';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="pms"
          element={<ReservationManagement />}
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
