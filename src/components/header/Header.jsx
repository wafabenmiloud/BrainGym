import React from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="head">
        <h1 className="title">
          {" "}
          Develop tomorrow's skills
          <br /> to reach your professional goals.
          <br/><Link to="/SignUp" id="btn">
               Join Us
            </Link>
        </h1>
        
      </div>
    </header>
  );
}
