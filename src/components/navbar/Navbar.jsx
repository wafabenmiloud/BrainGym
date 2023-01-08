import React, { useRef } from "react";
import './Navbar.css';
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
    <nav ref={navRef}>
        <ul className="navbar__menu">
        <li>
            <Link className="logo" to="/">
              BrainGym
            </Link>
          </li>
        
          <li>
            <Link className="navbar__link" to="/Cours">
              Courses
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="/News">
              News
            </Link>
          </li>

            <Link to="/SignIn" className="btn">
              Login
            </Link>
            <Link to="/SignUp" className="btn">
               Get started
            </Link>
          <button className="navbar__btn close" onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>
      </nav>
     <div className="open_plus_logo">
     <Link className="logo" to="/">
              BrainGym
            </Link>
      <button className="navbar__btn open " onClick={showNavbar}>
        <AiOutlineMenu />
      </button>
     </div>
   </>  )
}
