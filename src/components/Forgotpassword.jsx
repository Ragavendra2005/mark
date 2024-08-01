import React, { useState } from "react";
import '../assets/css/Loginform.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Forgotpassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "") {
            setError("Email is required");
        } else {
            setError("");
            // Handle password reset logic here (e.g., API call)
            console.log('Password reset link sent to:', email);
            setMessage("Password reset link sent to your email");
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit} className='login'>
                <h1>Forgot Password</h1>
                {error && <p className="error">{error}</p>}
                {message && <p style={{color:'green'}}>{message}</p>}
                <div className='input'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='but'>
                    <Button variant="contained" type='submit'>Send Reset Link</Button>
                </div>
                <div className="login-link">
                    <p>Remembered your password? <Link to="/">Login</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Forgotpassword;
