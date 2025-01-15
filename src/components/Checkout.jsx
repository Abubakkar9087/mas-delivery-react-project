import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import PageBanner from "./PageBanner";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

const Wrapper = styled.section`

.checkout-section{
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: start;
gap: 20px;
padding: 10px;
}
.cart-page, .checkout-page {
    max-width: 600px;
    max-height: 700px;
    width: 100%;
    position: sticky;
    overflow: auto;
    top: 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  background-color: #f9f9f9;
}
table th, table td img{
max-width: 100px;
}
table th {
  background-color: #213555;
  color: white;
  border-radius: 0px;
  font-weight: bold;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th, table td {
  transition: all 0.3s ease;
}
.checkout-form {
 width: 100%;
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    text-align: left;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.checkout-form label {
  display: block;
  margin-bottom: 10px;
}

.checkout-form input[type="text"], .checkout-form input[type="tel"], .checkout-form input[type="email"], textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}

 button {
    height: auto;
    background-color: #0d1b2a;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 16px 2px;
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
.payment-method {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  align-items: start;
}
  .payment-method-item {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  align-items: start;
  justify-content: center;
}

.payment-method input[type="radio"] {
  margin-right: 5px;
}

.payment-method label {
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.payment-method label img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}


`;

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  return (
    <Wrapper>
      <Navbar />
      <PageBanner />
      <div className="checkout-section">
        {/* Checkout Form */}
        <div className="checkout-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea name="address" cols="50" rows="10"></textarea>
            </div>
            <div className="form-group">
              <label>Payment Method:</label>
            </div>
            <div className="payment-method">
              <div className="payment-method-item">
                <input type="radio" id="cod" name="paymentMethod" value="cod" />
                <label htmlFor="cod">Cash On Delivery (COD)</label>
              </div>
              <div className="payment-method-item">
                <input type="radio" id="online" name="paymentMethod" value="online" />
                <label htmlFor="online">Online Payment</label>
              </div>
              <div className="payment-method-item">
                <input
                  type="radio"
                  id="debitcard"
                  name="paymentMethod"
                  value="debitcard"
                  onChange={(e) =>
                    document.getElementById("debitcard-form").style.display =
                      e.target.checked ? "block" : "none"
                  }
                />
                <label htmlFor="debitcard">Debit Card: </label>
                <div id="debitcard-form" style={{ display: "none" }}>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardExp">Card Expiration Date</label>
                    <input type="text" id="cardExp" name="cardExp" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardCVV">Card CVV</label>
                    <input type="text" id="cardCVV" name="cardCVV" required />
                  </div>
                </div>
              </div>
              <div className="payment-method-item">
                <input
                  type="radio"
                  id="creditcard"
                  name="paymentMethod"
                  value="creditcard"
                  onChange={(e) =>
                    document.getElementById("creditcard-form").style.display =
                      e.target.checked ? "block" : "none"
                  }
                />
                <label htmlFor="creditcard">Credit Card: </label>
                <div id="creditcard-form" style={{ display: "none" }}>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardExp">Card Expiration Date</label>
                    <input type="text" id="cardExp" name="cardExp" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardCVV">Card CVV</label>
                    <input type="text" id="cardCVV" name="cardCVV" required />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit">Place Order</button>
          </form>
        </div>

        {/* Checkout Summary */}
        <div className="checkout-page">
          <h2>Checkout</h2>
          {cartItems.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.image} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>₹{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>₹{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No items in the cart.</p>
          )}
          <h2>Total: ₹{totalPrice}</h2>
        </div>
      </div>
      <Testimonial />
      <Footer />
    </Wrapper>
  );
};
export default Checkout;
