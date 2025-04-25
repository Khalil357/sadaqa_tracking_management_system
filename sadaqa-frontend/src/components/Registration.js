import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return regex.test(password);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validatePassword(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters, include both lowercase and uppercase letters.';
        }

        if (!/^\d{8,}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be at least 8 digits.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Form Data:', formData);
        alert('Registration successful! Redirecting to login...');
        navigate('/login');
    };

    const handleGoogleSignup = () => {
        alert('Google Signup clicked (simulate OAuth logic here).');
    };

    const handleOTPSignup = () => {
        alert('OTP Signup clicked (simulate OTP logic here).');
    };

    return (
        <div className="registration-container">
            <div className="registration-box">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        {errors.phone && <p className="error-text">{errors.phone}</p>}
                    </div>
                    <button type="submit" className="btn primary-btn">Register</button>
                </form>

                <div className="alt-options">
                    <button onClick={handleGoogleSignup} className="btn google-btn">
                        <i className="fab fa-google"></i> Sign up with Google
                    </button>
                    <button onClick={handleOTPSignup} className="btn otp-btn">
                        <i className="fas fa-key"></i> Sign up with OTP
                    </button>
                </div> <br />

                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    );
};

export default Registration;
