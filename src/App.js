import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/signup/Signin";
import SignUp from "./pages/signup/Signup";
import Cours from "./pages/cours/Cours";
import News from "./pages/news/News";
import Cour from "./pages/cours/Cour";
import img1 from "./assets/details1.png";
import img2 from "./assets/details2.png";
import img3 from "./assets/details3.png";
import img4 from "./assets/details4.png";
import img5 from "./assets/details5.jpg";
import img6 from "./assets/details6.jpeg";
import img7 from "./assets/details7.jpg";
import img8 from "./assets/details8.jpg";
import img9 from "./assets/details9.jpg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="SignIn" element={<SignIn />} />
          <Route exact path="SignUp" element={<SignUp />} />
          <Route exact path="Cours" element={<Cours />} />
          <Route
            exact
            path="cour1"
            element={
              <Cour
                img={img1}
                teacher="Antonio"
                seats="25"
                schedule="8.30 am - 10.00 am"
                title="Web development"
                desc="Every Web Developer must have a basic understanding of HTML, CSS, and JavaScript. Responsive Web Design is used in all types of modern web development. ECMAScript 5 (JavaScript 5) is supported in all modern browsers. Take a good look at it, especially the new array functions."
              />
            }
          />
          <Route
            exact
            path="cour2"
            element={
              <Cour
                img={img2}
                teacher="Lana"
                seats="25"
                schedule="10.15 am - 11.45 am"
                title="Mobile apps"
                desc="This Specialization enables learners to successfully apply core Java programming languages features & software patterns needed to develop maintainable mobile apps comprised of core Android components, as well as fundamental Java I/O & persistence mechanisms."
              />
            }
          />
          <Route
            exact
            path="cour3"
            element={
              <Cour
                img={img3}
                teacher="Tom"
                seats="25"
                schedule="1.00 pm - 2.30 pm"
                title="Robotics"
                desc="Welcome to BrainGym's Build Your First Robot project. here's where you'll find the full build instructions and downloadable extra content.Here you'll find a full guide for building your first robot from scratch"
              />
            }
          />
          <Route
            exact
            path="cour4"
            element={
              <Cour
                img={img4}
                teacher="Jack"
                seats="25"
                schedule="2.45 pm - 4.15 pm"
                title="Psocs"
                desc="Cypress Programmer Cypress Programmer is a flexible, cross-platform application for programming Cypress devices. It can Program, Erase, Verify, and Read the flash of the target device. It includes: OpenOCD is a programming tool modified slightly from OpenOCD FOSS tool to support Cypress devices and is installed as part of Cypress Programmer. Cypress Programmer and ModusToolbox IDE use KitProg3 low-level communication firmware. fw-loader is a software tool you can use to easily switch back and forth between KitProg2 and KitProg3. fw-loader is installed with ModusToolbox IDE. PSoC Programmer PSoC Programmer is a complete package that installs all components required for a programming and debug solution. In addition, the following tools are installed. Clock Programmer is used in configuring Cypress' configurable Clock devices. The Clock Programmer utilizes the CY3240 USB-I2C Bridge kit to configure Cypress' Clock devices. Bridge Control Panel is a simple debugging tool that comes with PSoC Programmer. Use it to communicate with target devices over I2C/UART/SPI serial communications interfaces. KitProg"
              />
            }
          />
          <Route
            exact
            path="cour5"
            element={
              <Cour
                img={img5}
                teacher="Stephan"
                seats="25"
                schedule="4.30 pm - 6.00 pm"
                title="Hardware Description Language"
                desc="VHDL stands for very high-speed integrated circuit hardware description language. It is a programming language used to model a digital system by dataflow, behavioral and structural style of modeling. This language was first introduced in 1981 for the department of Defense (DoD) under the VHSIC program.
Describing a Design : In VHDL an entity is used to describe a hardware module."
              />
            }
          />
          <Route
            exact
            path="cour6"
            element={
              <Cour
                img={img6}
                teacher="Emily"
                seats="25"
                schedule="6.15 pm - 7.45 pm"
                title="CyberSecurity"
                desc="This Cyber Security and Data Governance masters provides a fundamental understanding of skills needed to analyse an organisation's data assets and security measures in order to develop effective procedures to protect a company and therefore enhance its value. Learn to analyse the difficulties of managing the imminent threat of IT security. Explore tools to cope with these challenges and help organisations thrive. This specialist course has been designed with a core focus on technology, business and policy. You will develop professional skills to meet the ever-changing demands of today's digital world."
              />
            }
          />
          <Route
            exact
            path="cour7"
            element={
              <Cour
                img={img7}
                teacher="Tania"
                seats="25"
                schedule="9.00 pm - 10.30 pm"
                title="Python"
                desc="What is Python? Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.
It is used for:
* web development (server-side),
* software development,
* mathematics,
* system scripting.
What can Python do?
* Python can be used on a server to create web applications.
* Python can be used alongside software to create workflows.
* Python can connect to database systems. It can also read and modify files.
* Python can be used to handle big data and perform complex mathematics.
* Python can be used for rapid prototyping, or for production-ready software development.
Why Python?
* Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).
* Python has a simple syntax similar to the English language.
* Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
* Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.
* Python can be treated in a procedural way, an object-oriented way or a functional way."
              />
            }
          />
          <Route
            exact
            path="cour8"
            element={
              <Cour
                img={img8}
                teacher="Bill"
                seats="25"
                schedule="8.30 am - 10.00 am"
                title="English"
                desc="Enjoy our free resources
Explore our site to improve your English with our bite-sized lessons, quizzes and games.
With our varied selection of learning materials, you can practise your English for free.
* Skills : Improve your English speaking, listening, reading and writing
* Grammar : Practise verb tenses and grammar rules
* Vocabulary : Learn new words to understand and express yourself clearly"
              />
            }
          />
          <Route
            exact
            path="cour9"
            element={
              <Cour
                img={img9}
                teacher="Julia"
                seats="25"
                schedule="10.15 am - 11.45 am"
                title="Probability"
                desc="This probability and statistics course covers:
* Basic concepts such as random experiments, probability axioms, conditional probability, and counting methods
* Single and multiple random variables (discrete, continuous, and mixed), as well as moment-generating functions, characteristic functions, random vectors, and inequalities
* Limit theorems and convergence
* Introduction to mathematical statistics, in particular, Bayesian and classical statistics
* Random processes including processing of random signals, Poisson processes, discrete-time and continuous-time"
              />
            }
          />

          <Route exact path="News" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
