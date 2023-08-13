import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import navbarData from "../../Components/Navbar/navbarData";
import logo from "../../assets/images/logo.gif";
import {  NavLink, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [show, handleShow] = useState(false);
    const navigate = useNavigate()
    const handleScroll = () => {
        if (window.scrollY > 0) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <nav className={`navbar ${show ? "show-shadow" : ""}`}>
      <img src={logo} alt="logo"  onClick={() => navigate('/')}/>
      <div className={`desktopMenu ${mobileMenu ? "mob-menu" : null}`}>
        {navbarData.map((item, id) => (
          <NavLink className="nav-link" onClick={() => setMobileMenu(!mobileMenu)} to={`${item.path}`}>{item.linkName}</NavLink>
        ))}
      </div>
      <div onClick={() => setMobileMenu(!mobileMenu)}>
      {
        mobileMenu ? <RxCross2 className="ham"/> : <HiOutlineMenuAlt3 className="ham"/>
      }
      </div>    
    </nav>
  );
}
