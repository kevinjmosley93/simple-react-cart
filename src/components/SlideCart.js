import React, { useRef } from "react";

export const SlideCart = ({ cart }) => {
  const cartWrapperEl = useRef(null);
  const onButtonClick = () => {
    cartWrapperEl.current.style.display = "none";
  };
  return (
    <aside ref={cartWrapperEl} className="slide-cart slide-cart__wrapper">
      <div onClick={onButtonClick} className="slide-cart__close-btn">
        x
      </div>
      <div className="slide-cart__items">
        {cart.cartItems.length > 0 ? (
          cart.cartItems.map((item, idx) => (
            <span key={idx}>
              <p>{item.title}</p>
              <p>qty:{item.qty}</p>
              <p>${item.price}</p>
            </span>
          ))
        ) : (
          <div>No items in cart</div>
        )}
      </div>
      <div className="slide-cart__total">total: ${cart.total}</div>
    </aside>
  );
};
