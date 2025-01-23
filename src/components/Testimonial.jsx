import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);
const Wrapper = styled.section`
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
  gap: 1rem;
  white-space: nowrap; 
  padding:10px;
  width: max-content; /* Ensure it expands for all cards */
}

  .card {
    // border: 1px solid #0d1b2a99;
    padding: 10px;
    border-radius: 5px;
    max-width: 300px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    gap: 10px;
    text-align: start;
    box-shadow: 0px 0px 10px #00000080;
  }
    .card .description{
    text-align: start;
    text-wrap: auto;
    font-weight: lighter;
    }
    .card p{
    text-align: start;
    text-wrap: auto;
    }
  h2{
  margin-top: 20px;
  margin-bottom: 20px;
  }
  
    
`;



function Testimonial() {
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
        duration: 40, // Adjust speed
        ease: "none", // Linear motion for smooth scrolling
        repeat: -1, // Infinite loop
      }
    );
  }, []);

  const testimonials = [
    {
      title: 'Incredibly Fast Service!',
      description: 'I placed my order in the morning, and it arrived the same day. The delivery team is super efficient!',
      author: '- Sarah J.',
    },
    {
      title: 'Everything I Needed!',
      description: 'From groceries to gadgets, this website has it all. I love the convenience of buying everything in one place.',
      author: '- Rahul M.',
    },
    {
      title: 'Exceptional Support!',
      description: 'Had an issue with my order, and their team resolved it quickly. Highly professional and polite!',
      author: '- Rohit A.',
    },
    {
      title: 'Great Value for Money!',
      description: 'I’m amazed at the competitive pricing. The deals are fantastic, and the delivery fees are minimal!',
      author: '- Ahmed K.',
    },
    {
      title: 'Trustworthy Service!',
      description: 'All my orders arrive securely packaged, and payments are seamless. Highly recommended!',
      author: '- Priya S.',
    },
  ];

  return (
    <Wrapper>
      <h2>Customer Feedback</h2>
      <div className="scrolling-container">
        <div className="services-scroll" ref={containerRef}>
          {testimonials.map((service, index) => (
            <div className="card" key={index}>
              <h3>{service.title}</h3>
              <p className='description'>{service.description}</p>
              <p> {service.author}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Testimonial;