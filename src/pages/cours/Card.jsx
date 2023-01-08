import React from 'react'
import './Cours.css';
import { Link } from "react-router-dom";


export default function Card(props) {
  return (
    <div id='card'>
      <div className="card__img">
        <img src={props.img} alt="img" />
        </div>
      <div className="card__fee">
        <Link id='fee' to={props.link}>{props.fee}</Link>
        <h5>free</h5>
        </div>
      <div className="card__desc">
        <Link to={props.link}><h3>{props.title}</h3></Link>
        <p>{props.desc}</p>
        <h5>{props.teacher}</h5>
        </div>
    </div>
  )
}
