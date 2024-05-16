import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './componet/loginUser';
import Home from './componet/home';
import Register from './componet/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
      
      </Routes>
    </Router>
  );
}

export default App;
