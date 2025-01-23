import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mixedData, groceryData, medicineData } from "./ProductData";
import styled from "styled-components";
import { addToCart, updateCartQuantity } from "../components/cartSlice"; // Import necessary actions
import Navbar from "./Navbar";
import PageBanner from "./PageBanner";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import NoData from "./NoData";
import Productpage from "./Productpage";




function Productpages() {
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
    <>
      <Navbar />
      <PageBanner />
      <Productpage />
      <Testimonial />
      <Footer />
    </>
  );
}


export default Productpages;
