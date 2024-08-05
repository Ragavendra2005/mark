// src/components/LogoutButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data from localStorage or context
    localStorage.removeItem('authToken'); // or context method
    // Redirect to login page
    navigate('/login');
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
}

export default LogoutButton;
