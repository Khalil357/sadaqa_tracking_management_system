import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [useOTP, setUseOTP] = useState(false);
    const [otp, setOtp] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'otp') {
            setOtp(value);
        } else {
            setFormData({ ...formData, [name]: value });
        }
        setError('');
    };

    const validatePassword = (password) => {
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        return password.length < 8 && hasUpper && hasLower;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!useOTP && !validatePassword(formData.password)) {
            setError('Password must be under 8 characters and include both uppercase and lowercase letters.');
            return;
        }

        if (useOTP && otp.length !== 6) {
            setError('OTP must be 6 digits.');
            return;
        }

        console.log('Login Data:', useOTP ? { email: formData.email, otp } : formData);
        alert('Login successful!');
        navigate('/');
    };

    const handleGoogleLogin = () => {
        alert('Redirecting to Google login (mock)');
        // Add Google OAuth logic here
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
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

                    {!useOTP ? (
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
                        </div>
                    ) : (
                        <div>
                            <label>Enter OTP:</label>
                            <input
                                type="text"
                                name="otp"
                                placeholder="6-digit OTP"
                                value={otp}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit">{useOTP ? 'Login with OTP' : 'Login'}</button>

                    <div className="login-options">
                        <p className="toggle-otp" onClick={() => setUseOTP(!useOTP)}>
                            {useOTP ? 'Use Password Instead' : 'Use OTP Instead'}
                        </p>
                        <p className="google-login" onClick={handleGoogleLogin}>
                            <i className="fab fa-google"></i> Login with Google
                        </p>
                    </div>
                </form>

                <p className="register-link">
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
