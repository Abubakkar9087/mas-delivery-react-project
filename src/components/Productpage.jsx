import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mixedData, groceryData, medicineData, foodData, electronicsData } from "./ProductData";
import styled from "styled-components";
import { addToCart, updateCartQuantity } from "../components/cartSlice"; // Import necessary actions
import NoData from "./NoData";

const Wrapper = styled.section`
  .product-cards {
        display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    max-width: 1320px;
    padding: 10px;
  }
  .product-card {
    border-radius: 10px;
    background: #fff;
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0px 4px #00000080;
    transition: .3s ease-in;

    &:hover {
      box-shadow: 0 0px 8px #000000b8;
      transform: scale(1.03);
      }
}
  }
  .product-card img {
        width: 100%;
    min-height: 150px;
    max-height: 150px;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
  }
  .product-body {
    gap: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 125px;
    transition: 0.3s ease-in-out;

    h2{
    font-size: 18px;
    padding-top: 10px;
    padding-bottom: 10px;
    }
    }

  .product-btn {
    padding: 5px 10px;
    gap: 10px;
    display: flex;
  }
  .buy-modals {
    width: 100%;
    max-width: 800px;
    background: blue;
    position: fixed;
    top: 50%;
    display: flex;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    z-index: 10;
  }
  .buy-modal {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 10px;
    background: #ededff;
    padding: 10px;
  }
  .buy-modal span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #0d1b2a;
    padding: 10px;
  }
  .buy-modal span h2 {
    color: white;
    text-shadow: 0 0 2px black;
  }
  .buy-modal span p {
    width: 40px;
    height: 40px;
    color: white;
    text-shadow: 0 0 2px black;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    background: white;
    color: #0d1b2a;
    transition: 0.3s ease-in-out;
  }
  .buy-content-img {
    max-width: 400px;
    width: 100%;
    height: 500px;
    padding: 0px;
  }
  .buy-content-img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .buy-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    height: 500px;
    width: 100%;
    max-width: 870px;
    text-align: start;
    align-items: start;
    padding: 10px;

    h2 {
    width: 100%;
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: row;
      flex-wrap: wrap;
    }
      p{
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: row;
      flex-wrap: wrap;
      }

    h4{
    background: transparent;
    font-weight: 700;
    color: #0d1b2a;
    }
  }
  button {
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
  }
  button:hover {
    background-color: white;
    color: #0d1b2a;
    border: 2px solid #0d1b2a;
  }
.quantity{
width: 40px;
}
.header-component{
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
gap: 10px;
align-items: center;
    margin-bottom: 20px;
}
  select,input {
    color: #0d1b2a;
    font-size: 16px;
    font-weight: 700;
    border: 1px solid #0d1b2a;
    padding: 5px;
    cursor: pointer;
    margin-top: 10px;
    outline: none;
    transition: 0.2s ease-in-out;
  }
    h1{
    margin-top: 20px;
    margin-bottom: 20px;
    }

  @media screen and (max-width: 1319px) {
    .product-cards {
      justify-content: center;
    }
  }
    @media screen and (max-width: 425px) {
    .product-cards {
      justify-content: center;
    }

    }
`;

function Productpage() {
  const [categories, setCategory] = useState("");
  const [buyModal, setBuyModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Determine the product data based on the selected category
  const productData =
    categories === "medicine"
      ? medicineData
      : categories === "grocery"
        ? groceryData
        : categories === "electronics"
          ? electronicsData
          : categories === "food"
            ? foodData
            : mixedData;

  // Filter products based on the search term
  const filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const openModal = (product) => {
    setSelectedProduct(product);
    setBuyModal(true);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value));
    setQuantity(newQuantity);
  };

  const calculateTotal = () => {
    if (selectedProduct) {
      return selectedProduct.price * quantity;
    }
    return 0;
  };

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      // Update quantity if product already in cart
      dispatch(updateCartQuantity({ id: product.id, quantity: existingProduct.quantity + 1 }));
    } else {
      // Add product to cart with initial quantity
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
    alert(product.title + ' ' + "added to cart!");
  };

  return (
    <Wrapper>
      <h1>Product Category</h1>
      <div className="header-component">
        <select value={categories} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Category</option>
          <option value="medicine">Medicine</option>
          <option value="grocery">Grocery</option>
          <option value="electronics">Electronics</option>
          <option value="food">Food</option>
          <option value="other">Other</option>
        </select>
        <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search" />
      </div>
      <div className="product-cards">
        {
          filteredProducts.length === 0 ?
              <NoData/>
            :
            filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.image} alt={`${product.title} image`} />
                <div className="product-body">
                  <h2>{product.title}</h2>
                  <p>Price: ₹{product.price}</p>
                  <div className="product-btn">
                    <button id="buynow" onClick={() => openModal(product)}>
                      Buy Now
                    </button>
                    <button onClick={() => handleAddToCart(product)}>Cart</button>
                  </div>
                </div>
              </div>
            ))
        }
        {buyModal && selectedProduct && (
          <div className="buy-modals">
            <div className="buy-modal">
              <span className="modal-header">
                <h2>Product Buy</h2>
                <p onClick={() => setBuyModal(false)} className="close-button" title="Close">x</p>
              </span>
            </div>
            <div className="buy-modal">
              <div className="buy-content-img">
                <img src={selectedProduct.image} alt={selectedProduct.title} />
              </div>
              <div className="buy-content">
                <h2>
                  Product Name: <h4>{selectedProduct.title}</h4>
                </h2>
                <p>
                  Product Description: <h4>{selectedProduct.description}</h4>
                </p>
                <p>
                  Product Price: ₹<h4>{selectedProduct.price}</h4>
                </p>
                <p>
                  Product Quantity:
                  <input
                    type="number"
                    value={quantity}
                    className="quantity"
                    onChange={handleQuantityChange}
                  />
                </p>
                <p>
                  Product Total: ₹<h4>{calculateTotal()}</h4>
                </p>
                {/* Pass data using Link state */}
                <Link
                  to="/checkout"
                  state={{
                    cartItems: [
                      {
                        ...selectedProduct,
                        quantity,
                      },
                    ],
                    totalPrice: calculateTotal(),
                  }}
                >
                  <button>Place Order</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
}


export default Productpage;
