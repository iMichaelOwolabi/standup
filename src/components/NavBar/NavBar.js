import React from 'react';
import { Link } from 'react-router-dom';
import NavStyle from './NavBar.module.css';

const NavBar = (props) => {
  return (
    <nav className={NavStyle.navbar}>
      <div className={NavStyle.logo}>{props.name}</div>
      <Link to="/setup" className={NavStyle.link}>Setup</Link>
      <Link to="/" className={NavStyle.link}>Standup</Link>
      <div className={NavStyle.date}>{new Date().toDateString()}</div>
  </nav>
  );
}

export default NavBar;
