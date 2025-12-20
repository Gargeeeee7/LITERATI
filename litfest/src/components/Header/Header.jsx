import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">LitFest 2026</div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#events">Events</a>
        <a href="#speakers">Speakers</a>
        <a href="#timeline">Timeline</a>
        <Link className="cursor-pointer register-btn" to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;