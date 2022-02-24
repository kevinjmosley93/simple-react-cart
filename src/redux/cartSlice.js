import { createSlice } from "@reduxjs/toolkit";
import { fakeProduct } from "../data";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state) => {
      const cartSlide = document.querySelector(
        ".slide-cart.slide-cart__wrapper"
      );
      
      // Add product to cart
      state.cartItems.push({ ...fakeProduct });
      // Find total price
      const totalPrice = state.cartItems.reduce((acc, val) => {
        return acc + val.qty * val.price;
      }, 0);
      // Update price
      state.total = totalPrice;
      cartSlide.style.display = "block";
    },
    removeFromCart: (state) => {
      const cartSlide = document.querySelector(
        ".slide-cart.slide-cart__wrapper"
      );
      
      state.cartItems = [];
      state.total = 0;

      cartSlide.style.display = "block";
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
