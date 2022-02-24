import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { SlideCart } from "./components/SlideCart";
import { addToCart, removeFromCart } from "./redux/cartSlice";

export const App = () => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  
  return (
      <div className="app">
        <SlideCart cart={cart} />
        <button onClick={(e) => {
          e.preventDefault()
        dispatch(addToCart())
        }}>Add To Cart</button>
        <button onClick={(e) => {
          e.preventDefault()
         dispatch(removeFromCart())
        }}>Clear Cart</button>
      </div>
  );
};
