import React, { useState } from 'react';
import './../assets/css/Loginform.css';
import { Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';

export const Loginform = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setErrors({ ...errors, username: "" });
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors({ ...errors, password: "" });
    };

    const validateForm = () => {
        let valid = true;
        let errors = {};

        if (username.trim().length < 3) {
            errors.username = "Username must be at least 3 characters long";
            valid = false;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(password)) {
            errors.password = "Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character";
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log(username, password);
            setMessage("Successfully Logged In");
            navigate('/HomePage');
        } else {
            setMessage("");
        }
    };

    const handleForgotPassword = () => {
        alert('Forgot Password clicked');
    };

    return (
        <>
            <div className="start">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2>Login</h2>
                    <div className="input__fields">
                        <input
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="input__fields">
                        <div className="password-field">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </button>
                        </div>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <button type="submit" className="but">Login</button>
                    {message && <p className="message">{message}</p>}
                    <div className="additional-options">
                        <Button onClick={handleForgotPassword}>Forgot Password?</Button>
                    </div>
                    <br />
                    New User?
                    <Button><Link to="/SignUp">Sign Up</Link></Button>
                    <Button><Link to="/Homepage">Check</Link></Button>
                </form>
            </div>
        </>
    );
};

export default Loginform;
