import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  removeFromCart,
  updateCartQuantity,
} from "../components/cartSlice"; // Import actions
import { useState } from "react";
import styled from 'styled-components'

const Wrapper = styled.section`
  /* nav start */
  .nav {
    width: 100%;
    background-color: #213555;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: white;
    position: relative;
  }

  .nav-bar {
    position: sticky;
    top: 10px;
  }

  .details {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;

    span {
      color: white;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    p {
      color: white;
      font-family: monospace;
      font-size: 15px;
      font-weight: 600;
    }
  }

  .nav .logo {
    width: 150px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .nav .logo img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  .nav ul {
    justify-content: end;
    align-items: center;
    padding: 10px;
    display: flex;
    list-style: none;
    gap: 20px;
  }

  .nav ul li {
    border: none;
    cursor: pointer;
    color: white;
    padding: 5px 20px;
    font-weight: 700;
    transition: 0.2s ease-in-out;
  }

  .nav ul li:hover {
    border: none;
    border-bottom: 2px solid white;
    cursor: pointer;
    padding: 5px 20px;
    background: #778da9;
  }

  .nav ul a {
    color: white;
    text-decoration: none;
  }



  .nav-links {
    text-decoration: none;
    color: white;
    position: relative;
  }
  /* cart start */
  .cart {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
    position: relative;
    cursor: pointer;
  }

  .cart img {
    width: 30px;
    height: 30px;
  }

  .cart span {
    color: white;
    width: 15px;
    height: 15px;
    background-color: rgb(128, 128, 255);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    left: 5px;
    font-weight: 700;
    padding: 10px;
  }

  .cart-page {
    width: 100%;
    max-width: 800px;
    max-height: 600px;
    background: rgb(192, 192, 240);
    position: fixed;
    top: 50%;
    display: flex;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    gap: 30px;
    z-index: 100;
    overflow: auto;
    color: black;
    padding: 10px;
  }
    .cart-page::-webkit-scrollbar {
      width: 5px;
      height: auto;
      background: black;
    }
      .cart-page::-webkit-scrollbar-thumb {
        background-color: rgb(128, 128, 255);
      }
    .cart-header{
    width: 100%;
    background: #213555;
    color: #ffffff;
    font-size: 20px;
    display: flex
;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    font-weight: 800;

    }
  .cart-page-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: auto;
    max-height: 500px;
    color: black;
    overflow: auto;
  }
    .close{
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 50%;
    background: white;
    color: #0d1b2a;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    }

  .cart-item-add {
    padding: 5px;
    border: 1px solid black;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: white;
  }

  .cart-item-add img {
    width: 70px;
    max-width: 70px;
    border-radius: 50%;
  }

  .cart-item-add h5 {
    width: auto;
    font-size: 15px;
    max-width: 70px;
  }

  .quantity-control {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
    .navbar-icons{
    width: 100%;
    display: none;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 10;
    background: #0d1b2a;
    }
    .icon-img{
    width: auto;
   object-fit: fill;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   img{
   width: 20px;
   }

   p{
   color: white;
   text-decoration: none;

   }
    }

    @media screen and (max-width: 768px) {
    .details, .nav-links li {
      display: none;
    }
      .navbar-icons{
      display: flex;
      }

  }
      @media screen and (max-width: 470px) {
        .navbar-icons{
        justify-content: space-between;
        gap: 35px;
        font-size: 10px;
        }
        .icon-img{
        width: auto;
        }
      }

`;

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false); // State to toggle cart visibility

  const cartItems = useSelector((state) => state.cart.items); // Access cart data
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Toggle cart visibility
  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  // Handle checkout
  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };

  // Handle quantity change
  const handleQuantityChange = (id, change) => {
    const item = cartItems.find((product) => product.id === id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        dispatch(updateCartQuantity({ id, quantity: newQuantity }));
      }
    }
  };

  return (
    <Wrapper>
      {/* Top bar with location, phone, and email */}
      <div className="nav details">
        <span className="details-content">
          <img src="./location.svg" alt="location" />
          <p>Pernambut, Vellore, Tamil Nadu - 635810</p>
        </span>
        <span className="details-content">
          <img src="./phone.svg" alt="phone" />
          <p>+91 9087690361</p>
        </span>
        <span className="details-content">
          <img src="./mail.svg" alt="mail" />
          <p>masinfotechservice@gmail.com</p>
        </span>
      </div>

      {/* Navbar */}
      <div className="nav nav-bar">
        <ul className="logo">
          <img src="./logo.png" alt="logo" />
        </ul>
        <ul className="nav-links">
          <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/services"><li>Service</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/form"><li>Login / Signup</li></Link>
        </ul>

        {/* Cart */}
        <ul className="carts">
          <div className="cart" onClick={handleCartToggle}>
            <span>{cartItems.length}</span>
            <img src="./cart.svg" alt="cart" />
          </div>
        </ul>
      </div>

      {/* Cart Page */}
      {cartOpen && (
        <div className="cart-page">
          <div className="cart-header">
            <p>Your Cart</p>
            <p className="close" onClick={handleCartToggle}>X</p>
          </div>
          <div className="cart-page-content">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item-add">
                  <img src={item.image} alt={item.title} />
                  <h5>{item.title}</h5>
                  <h5>₹{item.price}</h5>
                  <div className="quantity-control">
                    <button
                      className="decrement"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <h5>{item.quantity}</h5>
                    <button
                      className="increment"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    X
                  </button>
                </div>
              ))
            ) : (
              <p>Your cart is empty!</p>
            )}
          </div>
          <div className="total">
            <h2>Total: ₹{totalPrice}</h2>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
      {/* Bottom Navbar for mobile */}
      <div className="navbar-icons">
        <Link to="/">
          <div className="icon-img">
            <img src="./home.svg" alt="icon" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/shop">
          <div className="icon-img">
            <img src="./shop.svg" alt="icon" />
            <p>Shop</p>
          </div>
        </Link>
        <Link to="/services">
          <div className="icon-img">
            <img src="./service.svg" alt="icon" />
            <p>Services</p>
          </div>
        </Link>
        <Link to="/contact">
          <div className="icon-img">
            <img src="./contact.svg" alt="icon" />
            <p>Contact</p>
          </div>
        </Link>
        <Link to="/form">
          <div className="icon-img">
            <img src="./login.svg" alt="icon" />
            <p>Login</p>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
}

export default Navbar;