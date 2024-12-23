import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/vms-logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bg">
      <img src={navlogo} alt="nav-logo" className="nav-logo" />
      <ul>
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/videos">Videos</NavLink>
        <NavLink to="/login">Login</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
