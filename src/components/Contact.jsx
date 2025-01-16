import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import PageBanner from './PageBanner';
import Footer from './Footer';
import Testimonial from './Testimonial';

const Wrapper = styled.section`
.ContactForm{
width: 100%;
height: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 20px;
padding: 10px;
}
.contact{
width: 100%;
max-width: 500px;
height: auto;
max-height: 500px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
padding: 10px;
}
.contact img{
width: 100%;
max-width: 500px;
height: auto;
max-height: 400px;
filter: drop-shadow(0px 4px 3px black);
}
.contact form{
width: 100%;
max-width: 500px;
display: flex;
flex-direction: column;
gap: 20px;
}
.contact form input{
width: 100%;
max-width: 500px;
padding: 10px; 
border: none;
outline: none;
border-bottom: 2px solid black;
}
.contact form textarea{
width: 100%;
max-width: 500px;
padding: 10px; 
border: none;
outline: none;
border-bottom: 2px solid black;
}
.contact form button{
width: 100%;
    max-width: 500px;
    padding: 10px;
    border: 2px solid #0d1b2a;
    color: white;
    background: #0d1b2a;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: .3s ease-in-out;
    }
    .contact form button:hover{
    background: white;
    color: #0d1b2a;
    }
    `;
function Contact() {
  return (
    <Wrapper>
        <Navbar/>
        <PageBanner/>
            <h2>Get in Touch</h2>
        <div className="ContactForm">
            <div className="contact">
                <img src="/public/contact.png" alt="" />
            </div>
            <div className="contact">
             <form action="">
                <input type="text" name="name" id="name" placeholder='Enter Your Name'  required/>
                <input type="email" name="email" id="email" placeholder='Enter Your Email'  required/>
                <input type="text" name="subject" id="subject" placeholder='Enter Your Subject'  required/>
                <textarea name="message" id="message" cols="30" rows="5" placeholder='Enter Your Message' required></textarea>
                <button type="submit">Submit</button>
                </form>   
            </div>
        </div>
        <Testimonial/>
        <Footer/>
    </Wrapper>
  )
}

export default Contact