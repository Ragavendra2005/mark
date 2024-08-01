import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Clear any authentication tokens or user data here if needed

    // Redirect to the login page
    navigate('/');
  }, [navigate]);

  return null; // This component does not need to render anything
};

export default Logout;
