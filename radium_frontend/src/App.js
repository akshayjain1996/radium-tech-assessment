import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
      <Router>
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">User Management System</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;