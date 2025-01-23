import React from 'react'
import Navbar from './Navbar';
import PageBanner from './PageBanner';
import Footer from './Footer';
import Testimonial from './Testimonial';
import Contacts from './Contacts';

function Contact() {
  return (
    <>
        <Navbar/>
        <PageBanner/>
        <Contacts/>    
        <Testimonial/>
        <Footer/>
    </>
  )
}

export default Contact