import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Productpage from "./components/Productpage";
import ServiceComp from "./components/ServiceComp";
import { Link } from "react-router-dom";
import Services from "./components/Services";
import Service from "./components/Service";
import Contacts from "./components/Contacts";


function App() {

 
  return (
    <div className="App">

      <Navbar />
      {/* <PageBanner/> */}
      {/* banner start */}
      <section className="banner">
        <video src="/public/bannerbg.mp4" autoPlay loop muted></video>
        <h1>Welcome to MAS Delivery</h1>
        <p>Buy Anything You Want</p>
        <Link to='/shop' >
        <button id="shopnow"> Shop Now</button>
        </Link>
      </section>
      <ServiceComp />
      <Productpage />
      <Service/>
      <Contacts/>
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
