import React from "react";
import cart_styles from "./Cart.module.scss";

function Cart() {
  let price = 10;

  return (
    <div>
      <div className={cart_styles.cart_wrapper}>
        <div className={cart_styles.cart_sidebar}>left sidebar</div>
        <div className={cart_styles.cart_main_window}>right sidebar</div>
      </div>
      <div className={cart_styles.submit_section}>
        <p className={cart_styles.total_price}>Total price: {price}</p>
        <button className={cart_styles.submit_btn}>Submit</button>
      </div>
    </div>
  );
}

export default Cart;
