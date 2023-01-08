import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import about from "../../assets/about.jpg";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import Card from "../cours/Card";
export default function Home() {
  return (
    <>
      <Header />
      <section id="about">
        <h1>Why Us ?</h1>
        <div className="content">
          <div className="about__text">
            <p className="text">
              E-learning (or Distance Education) is a recognized educational
              practice that supports a flexible model of access to knowledge,
              enabling education and training numerically larger audience than
              what is traditional education models can effectively support (Som
              Naidu, 2006). As the years go by, ways of learning is changing
              modified and adapted to suit the trends and the requirements of
              the era. "The success of Web 2.0 inspired e-learning to evolve
              into e-learning 2.0, which exploits the collective intelligence to
              achieve education-centric user" (Huang Shiu, 2011).
            </p>
          </div>
          <div className="about__img">
            <img src={about} alt="about" />
          </div>
        </div>
      </section>
      <section id="courses">
        <h4><hr/>Courses<hr/></h4>
        <h1>Popular Courses</h1>
        <div id="cards__wrapper">
          <Card
            img={img1}
            fee="Web Development"
            title="Website Design"
            desc="Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website 
            look great, work fast and perform well with a seamless user experience."
            teacher="Antonio"
            link="/cour1"
          />
          <Card img={img2} fee="Android" 
          title="Mobile app development"
          desc=" Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants,
           enterprise digital assistants or mobile phones."
           link="/cour2"
           teacher="Lana" />
          <Card img={img3} fee="Robotics" 
          title="Robots development"
          desc="There are many types of robots; they are used in many different environments and for many different uses. Although being very diverse in application and form."
          link="/cour3"
          teacher="Tom" />
        </div>
      </section>
      <Footer />
    </>
  );
}
