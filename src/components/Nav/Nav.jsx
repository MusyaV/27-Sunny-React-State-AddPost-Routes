import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    
      <nav className={s.nav}>
        <div><NavLink className={ navData => navData.isActive ? s.active : s.item } to="/main">Main</NavLink></div>
        <div><NavLink className={ navData => navData.isActive ? s.active : s.item } to="/home">Home</NavLink></div>
        <div><NavLink className={ navData => navData.isActive ? s.active : s.item } to="/message">Message</NavLink></div>
        <div><NavLink className={ navData => navData.isActive ? s.active : s.item } to="/contact">Contact</NavLink></div>
      </nav>
    
  );
};

export default Nav;