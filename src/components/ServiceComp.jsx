import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);
const Wrapper = styled.section`
/* service start */

.service{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-evenly;
    /* flex-wrap: wrap; */
    align-items: center;
    padding: 10px;
    position: relative;
    overflow: hidden;

.service-card{
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
}
.category{
  max-width: 1300px;
  padding: 10px;
}
.cards{
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  min-width: 300px;
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #e0e1dd;
}
  .cards img{
    width: 80px;  
    height: 80px;
    object-fit: contain;
    border-radius: 50%;
    aspect-ratio: 1/1;
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
.scroll-card {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  min-width: 250px;
  max-width: 250px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #e0e1dd;
}
.scroll-card img {
  width: 80px;  
    height: 80px;
    object-fit: contain;
    border-radius: 50%;
}
    .scrollcard-content{
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    text-wrap: auto;
    }
.scroll-card h3 {
  font-size: 100%;
  margin-bottom: 0.5rem;
  color: #333;
}
  h2{
  margin-bottom: 20px;
  }

/* service end */
`;

function ServiceComp() {

  // Select the category card container and arrow buttons
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
        duration: 30, // Adjust speed
        ease: "none", // Linear motion for smooth scrolling
        repeat: -1, // Infinite loop
      }
    );
  }, []);
  const categories = [
    {image:'./medicineIcon.png', title: "Medicine", details: "medicine-type" },
    {image:'./grocery.png', title: "Groceries", details: "Fresh. Organic. Local." },
    {image:'./food.png', title: "Food", details: "All type of food" },
    {image:'./electronics.png', title: "Electronics", details: "Latest, Durable, Affordable." },
    {image:'./clothing.png', title: "Clothing", details: "Stylish, Comfortable, Affordable." },
    {image:'./sports.png', title: "Sports", details: "Durable, High-Performance, Affordable." },
    {image:'./books.png', title: "Books", details: "Informative, Inspiring, Educational." },
    {image:'./home.png', title: "Home Appliances", details: "Modern. Powerful. Efficient." },
    {image:'./toys.png', title: "Toys", details: "Fun. Safe. Educational." },
    {image:'./beauty.png', title: "Beauty Products", details: "Skincare. Fragrances. Makeup." },
  ];

  return (
    <Wrapper>
      <section className="service">
        <div className="service-card">
          <div className="cards">
            <img src="./fastdelivery.jpg" alt="service-icon" />
            <div className="card">
              <h4>Fast Delivery</h4>
              <p>On time delivery</p>
            </div>
          </div>
          <div className="cards">
            <img src="./payment.jpg" alt="service-icon" />
            <div className="card">
              <h4>Secure Payment</h4>
              <p>We ensure secure payment</p>
            </div>
          </div>
          <div className="cards">
            <img src="./moneyback.png" alt="service-icon" />
            <div className="card">
              <h4>100% Money Back</h4>
              <p>30 days return policy</p>
            </div>
          </div>
          <div className="cards">
            <img src="./customersupport.png" alt="service-icon" />
            <div className="card">
              <h4>Online Support</h4>
              <p>24/7 online support</p>
            </div>
          </div>
        </div>
        <div className="category">
          <h2>Category</h2>
          <div className="scrolling-container">
            <div className="services-scroll" ref={containerRef}>
              {categories.map((service, index) => (
                <div className="scroll-card" key={index}>
                  <img src={service.image} alt="service-icon" />
                  <div className="scrollcard-content">
                  <h3>{service.title}</h3>
                  <p>{service.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="left-arrow" onClick={scrollRight}>
              <img src="./rightarrow.svg" alt="" />
            </div> */}
        </div>
      </section>
    </Wrapper>
  )
}

export default ServiceComp