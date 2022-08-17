import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Login from './pages/Login';
import Main from './pages/Main';
import './App.css';

function App() {
  const isLoggedIn = useSelector((state) => state.persist.user.isSignIn);
  console.log(isLoggedIn)
  return (
    <>
      <Router>
        <Routes>
          {
            isLoggedIn ? <Route path="/" element={<Main />} />
            : <Route path="/" element={<Login />} />
          }
        </Routes>
      </Router>
    </>
  );
}

export default App;
