import React from 'react';
import logo from './assets/logo.png';
function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="logo" className="mr-2" />
          <div>Project Mgmt app</div>
        </a>
      </div>
    </nav>
  );
}

export default Header;
