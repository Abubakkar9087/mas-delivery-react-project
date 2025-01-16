import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);
const Wrapper = styled.section`
.services{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px;
  }
  .services img{
    width: 100%;
    max-width: 500px; 
    height: auto;
    max-height: 500px;
    object-fit: contain;
    filter: drop-shadow(0px 3px 3px black);
  }
  .services .services-content{
    width: 100%;
    max-width: 600px;
    height: auto;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;

    p{
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 1.5;
    text-align: start;
    }

    ul{
width: 100%;
    max-width: 500px;
    height: auto;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
    }
      li{
        font-size: 20px;
    letter-spacing: 1px;
    line-height: 1.5;
    text-align: start;
  }
  }
  /* Container for scrolling services */
.scrolling-container {
  overflow: hidden; /* Hide overflow for seamless scrolling */
  width: 100%; /* Full-width */
  position: relative;
  max-width: 1300px;
  margin-bottom: 10px;
}

/* Inner container for scrolling items */
.services-scroll {
  display: flex;
  gap: 1rem; /* Space between cards */
  white-space: nowrap; /* Prevent line breaks */
  width: max-content; /* Ensure it expands for all cards */
}

/* Individual service card */
.card {
  flex: 0 0 auto; /* Prevent resizing */
  width: 250px; /* Fixed width for consistency */
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  border: 1px solid black;
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.card ul {
  padding: 0;
  list-style-type: circle;
}

.card ul li {
  font-size: 0.9rem;
  color: #555;
  list-style: inside circle;
  text-align: start;
}


`;

function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Duplicate the cards for seamless scrolling
    const children = Array.from(container.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      container.appendChild(clone); // Append clone
    });

    // Calculate scrolling width for smooth animation
    const totalWidth = container.scrollWidth / 2;

    // GSAP animation for infinite scrolling
    gsap.fromTo(
      container,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 20, // Adjust speed
        ease: "none", // Linear motion for smooth scrolling
        repeat: -1, // Infinite loop
      }
    );
  }, []);


  const services = [
    { title: "Grocery Delivery", details: ["Fresh fruits", "Frozen food"] },
    { title: "Electronics", details: ["Latest gadgets", "Tech products"] },
    { title: "Home Essentials", details: ["Cleaning supplies", "Toiletries"] },
    { title: "Personal Care", details: ["Skincare items", "Grooming products"] },
    { title: "Pharmacy Delivery", details: ["Medicines", "Health products"] },
    { title: "Custom Orders", details: ["Special requests", "Tailored solutions"] },
  ];
  return (
    <Wrapper>
      <div className="services">
        <img src="/public/services.png" alt="service" />
        <div className="services-content">
          <h2>Our Services</h2>
          <p>At MAS Delivery, we are committed to making your life easier by offering a wide range of services to cater to all your daily needs. With a focus on convenience, quality, and efficiency, we ensure a seamless delivery experience every time.</p>
          <ul>
            <li>Grocery Delivery</li>
            <li>Electronics and Gadgets</li>
            <li>Home Essentials</li>
            <li>Personal Care Products</li>
            <li>Pharmacy Delivery</li>
            <li>Quick Delivery</li>
            <li>Custom Orders</li>
          </ul>
        </div>
      </div>
      <div className="scrolling-container">
        <div className="services-scroll" ref={containerRef}>
          {services.map((service, index) => (
            <div className="card" key={index}>
              <h3>{service.title}</h3>
              <ul>
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

export default Services