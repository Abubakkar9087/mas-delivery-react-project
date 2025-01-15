import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array to hold cart items
  },
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        // If the product is already in the cart, increment its quantity
        existingProduct.quantity += action.payload.quantity;
      } else {
        // Otherwise, add the new product to the cart
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },

    // Action to update the quantity of a product in the cart
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.items.find((item) => item.id === id);
      if (existingProduct) {
        // Update the product's quantity
        existingProduct.quantity = quantity;
      }
    },

    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      // Filter out the product with the matching ID
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Export the actions
export const { addToCart, updateCartQuantity, removeFromCart } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
