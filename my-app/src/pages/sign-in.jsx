import React from 'react';
import argentBankLogo from '../assets/argentBankLogo.png';


function SignIn() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Argent Bank - Sign In</title>
        <link rel="stylesheet" href="../style/main.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body>
        <nav className="main-nav">
          <a className="main-nav-logo" href="./index.html">
            <img
              className="main-nav-logo-image"
              src={argentBankLogo} 
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </a>
          <div>
            <a className="main-nav-item" href="./sign-in.html">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          </div>
        </nav>
        <main className="main bg-dark">
          <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="./user.html" className="sign-in-button">Sign In</a>
            </form>
          </section>
        </main>
        <footer className="footer">
          <p className="footer-text">Copyright 2020 Argent Bank</p>
        </footer>
      </body>
    </html>
  );
}

export default SignIn;