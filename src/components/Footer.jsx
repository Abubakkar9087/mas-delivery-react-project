import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  .footer-cards {
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    background: #213555;
    padding: 10px;
    padding-left: 20px;
    padding-right: 50px;
    border-top: 1px solid rgb(0 0 75);
    margin-bottom: -10px;
  }

  .footer-card {
    padding: 10px;
    border-radius: 10px;
    width: auto;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: start;
  }

  .footer-card span {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 30px;
    text-align: start;
    margin-bottom: 20px;
  }

  .footer-card span img {
    width: 150px;
    height: 65px;
    object-fit: fill;
  }

  .footer-card h5 {
    width: 100%;
    height: auto;
    object-fit: contain;
    text-align: start;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: lighter;
    line-height: 1.2;
    letter-spacing: 1px;
    color: white;
  }

  .footer-card p {
    width: 100%;
    height: auto;
    object-fit: contain;
    text-align: start;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 1px;
    color: white;
  }

  .footer-card ul {
    width: 100%;
    height: auto;
    object-fit: contain;
    text-align: start;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 1px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    list-style: none;
  }

  .footer-card ul li {
    width: auto;
    height: auto;
    padding: 10px;
    list-style: none;
    color: white;
  }

  .footer-card ul a {
    text-decoration: none;
  }

  .footer-card span form {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 10px;
  }

  .footer-card span form input {
    width: 60%;
    height: 40px;
    border-radius: 20px;
    border: 1px solid rgb(0 0 75);
    padding: 10px;
    padding-left: 20px;
  }

  .footer-card span form button {
    height: 40px;
    background-color: #0d1b2a;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 20px;
    transition: 0.3s ease-in-out;
    border: 2px solid #0d1b2a;
    font-weight: 700;

    &:hover {
      background-color: white;
      color: #0d1b2a;
      border: 2px solid #0d1b2a;
    }
  }
    .social-media{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      
      ul{
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
        list-style: none;
        
        li{
          background: white;
          width: 40px;
          height: 40px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 50%;
          border: 1px solid white;
          cursor: pointer;
          transition: 0.3s ease-in-out;
      }

      li:hover{
        background-color: #ffffffb5;
        color: #0d1b2a;
        border: 2px solid #0d1b2a;
      }

    }
      .social-img{
        width: 25px;
    height: 25px;
    object-fit: contain;
    display: flex;
    justify-content: center;
    align-items: center;
      }

      @media(max-width: 768px) {
      .footer card span{
        margin-bottom: 50px;
      }
}
`;

function Footer() {
  return (
    <Wrapper>
      <div className="footer-cards">
        <div className="footer-card">
          <span>
            <img src="./logo.png" alt="logo" />
            <h5>
              Welcome to MAS Delivery, your one-stop solution for all your needs! From groceries and gadgets to everyday essentials, we bring a wide range of products to your doorstep with speed and reliability. Experience hassle-free shopping and seamless delivery, all in one place.
            </h5>
          </span>
          <p>&copy; 2024 All Rights Reserved MAS Delivery</p>
        </div>
        <div className="footer-card">
          <span>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/shop">
                <li>Shop</li>
              </Link>
              <Link to="/services">
                <li>Service</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </span>
          <span>
            <form action="">
              <input type="email" placeholder="Enter Your Email" required />
              <button>Subscribe</button>
            </form>
          </span>
          <span className="social-media">
            <ul>
              <li clssName="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="./youtube.svg" alt="" className='social-img'/>
                </a>
              </li>
              <li clssName="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src="./instagram.svg" alt="" className='social-img'/>
                </a>
              </li>
              <li clssName="social-icons">
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="./facebook.svg" alt="" className='social-img'/>
                </a>
              </li>
              <li clssName="social-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="./twitter.svg" alt="" className='social-img'/>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;