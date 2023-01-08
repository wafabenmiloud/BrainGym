import React from 'react'
import './Cours.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'

export default function Cour(props) {
  return (
    <div>
      <Navbar/>
      <h1 id="titre">
        Course Details
      </h1>
      <div className="col">
        <div className="row1">
          <div className="row1__col1">
            <img src={props.img} alt="img" />
          </div>
          <div className="row1__col2">
            <div className="row1__col2__row">
              <h4>Teacher</h4>
              <h4>{props.teacher}</h4>
            </div>
            <div className="row1__col2__row">
              <h4>Course Fee</h4>
              <h4>Free</h4>
            </div>
            <div className="row1__col2__row">
              <h4>Available Seats</h4>
              <h4>{props.seats}</h4>
            </div>
            <div className="row1__col2__row">
              <h4>Shedule</h4>
              <h4>{props.schedule}</h4>
            </div>
          </div>
        </div>
        <div className="row2">
          <h2>{props.title}</h2>
          <h4>{props.desc}</h4>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
