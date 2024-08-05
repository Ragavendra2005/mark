import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Add the login-page class to the body tag
    document.body.classList.add('login-page');

    // Cleanup function to remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Retrieve stored user data
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/home');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className='form-container'>
      <h2>Login</h2>
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
        <button type='submit'>Login</button>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
      </form>
    </div>
  );
}

export default LoginForm;
