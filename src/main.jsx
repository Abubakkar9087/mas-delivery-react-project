import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import "./App.css";
import Productpages from "./components/Productpages";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Login from "./components/Login";


createRoot(document.getElementById("root")).render(
  <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Productpages />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/form" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </Provider>
  </StrictMode>
);
