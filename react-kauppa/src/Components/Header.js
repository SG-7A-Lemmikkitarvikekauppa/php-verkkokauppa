import React from 'react';
import LoginForm from './LoginForm';
import SearchBar from './SearchBar';
import './Header.css';


function Header() {
  return (
    <div className="header">
      <div className="login">
        <LoginForm />
      </div>
      <div className='Search'>
      <SearchBar />
      </div>
    </div>
  );
}

export default Header;
