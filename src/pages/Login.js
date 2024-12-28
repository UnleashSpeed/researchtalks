import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginWithEmail, loginWithSocial } from '../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            await loginWithEmail(email, password);
            history.push('/home');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleSocialLogin = async (provider) => {
        try {
            await loginWithSocial(provider);
            history.push('/home');
        } catch (error) {
            console.error('Social login failed:', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleEmailLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <div className="social-login">
                <button onClick={() => handleSocialLogin('google')}>Login with Google</button>
                <button onClick={() => handleSocialLogin('facebook')}>Login with Facebook</button>
            </div>
        </div>
    );
};

export default Login;