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
  padding: 10px;
    border-radius: 10px;
    min-width: 300px;
    width: 300px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #e5e5e542;
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
  max-width: 1250px;
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
  border-radius: 5px;
  min-width: 300px;
  max-width: 300px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow:inset 0 0px 0px 100rem  #0000005c;
  cursor: auto;
}
.scroll-card img {
position: absolute;
  width: 100%;  
    height: 100%;
    object-fit: cover;
    z-index: -1;
}
    .scrollcard-content{
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    text-wrap: auto;
    color: white;
    }
.scroll-card h3 {
  font-size: 2em;
  margin-bottom: 0.5rem;
  color: white;
  cursor: context-menu; 
}
  h2{
  margin-bottom: 20px;
  }
  .service-items{
  width: 100%;
  max-width: 1250px;
  min-height: 430px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
  }
  .service-item{
  width: 600px;
  min-height: 480px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
  border-radius: 11px; 
  }
  .chat{
  display: flex;
  justify-content:center;
  align-items: center;
  position: relative;
  background:linear-gradient(311deg, #01654d, #018e6b);
  
  }

  .service-item1{
  width: 100%;
  min-height: 200px;
  height: auto;
  gap: 40px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  position: relative;
  
  }
  .service-item2{
  width: 100%;
  background: linear-gradient(40deg, #ceceff, #5ac3e3);
  background-image: url(./offerbg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 250px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
    border-radius: 11px; 
    position: relative;

  }
  .service-item-1{
  width: 280px;
  background: orange;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
    border-radius: 11px; 

  }
  .service-item-2{
  width: 280px;
  background: orange;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
    border-radius: 11px; 
    position: relative;

  }
  .service-item img{
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 10px; 
  }  
  .service-item2 img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  }  
  .service-item-1 img{
  width: 100%;
  height: 100%;
  object-fit: fill;
  }  
  .service-item-2 img{
  width: 100%;
  height: 100%;
  object-fit: fill;
  }  
    .service-item-content{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    box-shadow: inset 0 0 0 100rem #0000008a;
  position: absolute;
  color: white;
  flex-direction: column;


  a{
  text-decoration: none;
  color: white;
  }
  }
  .service-item-content{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  }
  button{
    width: 100%;
    padding: 10px 20px;
    border: 2px solid #0d1b2a;
    color: white;
    background: #0d1b2a;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    letter-spacing: 1px;
    transition: .3s ease-in-out;
    margin-top: 10px;

    &:hover{
    background: white;
    color: #0d1b2a;
    }
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
        duration: 60, // Adjust speed
        ease: "none", // Linear motion for smooth scrolling
        repeat: -1, // Infinite loop
      }
    );
  }, []);
  const categories = [
    { image: './medicineIcon.png', title: "Medicine" },
    { image: './grocery.png', title: "Groceries" },
    { image: './food.png', title: "Food" },
    { image: './electronics.png', title: "Electronical" },
    { image: './clothing.png', title: "Clothing" },
    { image: './sports.png', title: "Sports" },
    { image: './bike-taxi.jpg', title: "Bike Taxi" },
    { image: './books.png', title: "Stationary" },
    { image: './c2c.png', title: "Product Delivery" },
    { image: './beauty.png', title: "Beauty Products" },
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

        <div className="service-items">
          <div className="service-item chat">
            <img src="./chat.png" alt="error" />
            <div className="service-item-content">
              <h1>Send Your Product List On Whatsapp</h1>
              <p>Place Order Through Whatsapp. </p>
              <a href="https://wa.me/+919087690361"><button>Place Order</button></a>
            </div>
          </div>
          <div className="service-item">
            <div className="service-item1">
              <div className="service-item-1">
                <img src="./phone-call.jpg" alt="error" />
                <div className="service-item-content">
              <h1>Call Support</h1>
              <p>Place Order Through Phone Call</p>
              <a href="+919087690361"><button>Place Order</button></a>
            </div> 
              </div>
              <div className="service-item-2">
                <img src="./discound.png" alt="error" />
                <div className="service-item-content">
              <h1>50% Discount</h1>
              <p>Get 50% Delivery fee off on your 11th order</p>
            </div>
              </div>
            </div>
            <div className="service-item2">
              <img src="./offer.png" alt="error" />
              <div className="service-item-content">
              <h1>Chat Support</h1>
            </div>              
            </div>
          </div>
        </div>

        <div className="category">
          <h2>What We Deliver</h2>
          <div className="scrolling-container">
            <div className="services-scroll" ref={containerRef}>
              {categories.map((service, index) => (
                <div className="scroll-card" key={index}>
                  <img src={service.image} alt="service-icon" />
                  <div className="scrollcard-content">
                    <h3>{service.title}</h3>
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