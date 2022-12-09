import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import { Dashboard } from './pages/dashboard';
import { SignIn } from './pages/signin';
import { SignUp } from './pages/signup';
import { Welcome } from './pages/welcome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
