import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import bg from './footer-bg.jpg';
// import logo from
function Footer() {
  return (
    <div className="footer" >
      <div className="footer__content container">
        <div className="footer__content__logo">
          <h1 className="nav__logo">jagged.</h1>
          <Link to="/">Jagged</Link>
        </div>
      </div>
      <div className="footer__content__menus">
        <div className="footer__content_menu">
          <Link to="/">Home</Link>
          <Link to="/">Contact us</Link>
          <Link to="/">Term of services</Link>
          <Link to="/">About us</Link>
        </div>
        <div className="footer__content_menu">
          <Link to="/">Live</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Premium</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
        <div className="footer__content_menu">
          <Link to="/">Your List</Link>
          <Link to="/">Recent Releases</Link>
          <Link to="/">Top Rated</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
