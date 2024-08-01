import React, { useState } from 'react';
import '../assets/css/SignUp.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!data.name || data.name.length < 3) {
            formIsValid = false;
            errors["name"] = "Username must be at least 3 characters long.";
        }

        if (!data.email) {
            formIsValid = false;
            errors["email"] = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            formIsValid = false;
            errors["email"] = "Email is not valid.";
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!data.password || !passwordRegex.test(data.password)) {
            formIsValid = false;
            errors["password"] = "Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.";
        }

        if (data.password !== data.confirmPassword) {
            formIsValid = false;
            errors["confirmPassword"] = "Passwords do not match.";
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleSubmitChangeSignUp = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("User Data:", data);
            setMessage("Successfully Signed Up");
        } else {
            setMessage(""); 
        }
    };

    return (
        <div className="body">
            <form className="signup-form" onSubmit={handleSubmitChangeSignUp}>
                <h1>Sign Up</h1>
                <div className="input_fields">
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="input_fields">
                    <input
                        type="email"
                        placeholder="Email Address"
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="input_fields">
                    <div className="password-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            onChange={(e) => setData({ ...data, password: e.target.value })}
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
                <div className="input_fields">
                    <input
                        type="text"
                        placeholder="Confirm Password"
                        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                <button type="submit" className="but"><Link to="/">Submit</Link></button>
                {message && <p className="message">{message}</p>}
                <p>Already have an account,click login  <Link to="/">LogIn</Link></p>

            </form>
        </div>
    );
};

export default SignUp;
