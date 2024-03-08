
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        
        if (username === 'admin' && password === '1234') {
            console.log('Login successful');
            window.location.href = "/home";
        } else {
            
            setErrorMessage('Invalid username or password. Please try again.');
        }
    };

    return (
        <div className="text-center m-5-auto">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <p>
                    <label>Username or email address</label><br />
                    <input 
                        type="text" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </p>
                <p>
                    <label>Password</label>
                    <br />
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}
