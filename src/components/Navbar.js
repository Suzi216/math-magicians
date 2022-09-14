import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/quotes',
      text: 'Quotes',
    },
    {
      id: 3,
      path: '/calculator',
      text: 'Calculator',
    },
  ];
  return (
    <nav>
      <ul className="navBar">
        <h1>Math Magicians</h1>
        {links.map((link) => <li key={link.id}><NavLink to={link.path}>{link.text}</NavLink></li>)}
      </ul>
    </nav>
  );
};
export default Navbar;
