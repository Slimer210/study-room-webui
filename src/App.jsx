import * as React from 'react';
import {
  BrowserRouter, Routes, Route, Link, NavLink,
} from 'react-router-dom';

import Homepage from './routes/Homepage';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
