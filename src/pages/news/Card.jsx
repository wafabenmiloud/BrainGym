import React from 'react'
import './News.css';
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div id='card'>
        <img src={props.img} alt="img" />
       <Link to={props.link}> <h3>{props.new}</h3></Link>
        <h5>{props.date}</h5>
    </div>
  )
}
