import React from 'react';
import { Link } from 'react-router-dom';
import NavCss from './NavBar.module.css';

const NavBar = (props) => {
  return (
    <nav className={NavCss.navbar}>
      <div className={NavCss.logo}>{props.name}</div>
      <Link to="/setup" className={NavCss.link}>Setup</Link>
      <Link to="/" className={NavCss.link}>Standup</Link>
      <div className={NavCss.date}>{new Date().toDateString()}</div>
  </nav>
  );
}

export default NavBar;
