import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/UserProvider';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault(); 
        setError('');

        try {
            const response = await fetch('http://localhost:5000/user');
            const data = await response.json();
            console.log(data);

            setUser({
                email: email,
            });

            console.log(email);

            console.log(email);
            navigate('/home');
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    const handleNavigate = () => {
        navigate('/signup');
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                <div className='signup-btn-container'>
                    <button type='button' onClick={handleNavigate} className='signup-btn'>Signup</button>
                </div>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Login;
