// Login.js
import React, { useState } from 'react';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Invalid username or password');
        }
      })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className='main-container'>
    <div className="login-container">
     <span className="login-welcome-text">Welcome back!👋</span>
      <h3>Sign in to your Account</h3>
      {error && <p className="login-error">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>CONTINUE</button>
      <a href="/register" className='Forget'>Forget Your password</a>
    </div>
    <div className="no-account">
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
    </div>
    </div>
  );
};

export default Login;
