import React from 'react'
import './News.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer"
import Card from './Card';
import img1 from '../../assets/event1.jpg'
import img2 from '../../assets/event2.jpg'


export default function News() {
  return (
    <div>
      <Navbar/>
      <h1 id='titre'>News</h1>
      <div id="cards">
        <Card new="Teaching schedule for the month of Ramadan 2023" img={img1} date="Tuesday, April 13th at 8:30 am" link="#"/>
        <Card new="Distribution of DS classrooms MARCH 2023" img={img2} date="Monday, March 8th at 9:00 am" link="#"/>
      </div>
      <Footer/>
    </div>
  )
}
