import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './RegisterForm.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Add the register-page class to the body tag
    document.body.classList.add('register-page');

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('register-page');
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      // Save user data (using localStorage for simplicity)
      localStorage.setItem('user', JSON.stringify({ email, password }));
      navigate('/login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className='form-container'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input
            type='password'
            id='confirmPassword'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit'>Register</button>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </form>
    </div>
  );
}

export default RegisterForm;
