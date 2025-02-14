import React from 'react';
import { Link } from 'react-router-dom';
//import "../styles/Login.css"; // Assuming you'll add some styling later

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default Login;
