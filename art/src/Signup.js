/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./signup.css"; // Make sure this path matches the location of your CSS file.

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="logo-section">
        <div className="logo"></div>
        <h1 className="web-title">Welcome Back</h1>
      </div>
      <p className="prompt">Sign in to continue to your account</p>

      {/* Social Login Buttons */}
      <div className="social-login">
        <button className="google-btn">Sign in with Google</button>
        <button className="apple-btn">Sign in with Apple</button>
        <button className="microsoft-btn">Sign in with Microsoft</button>
      </div>

      <div className="or-divider">
        <span>OR</span>
      </div>

      {/* Login Form */}
      <form>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />

        <div className="forgot-password">
          <a href="">Forgot Password?</a>
        </div>

        <button className="signin-btn" type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
