import React, { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CartItem from "../../cart-item/CartItem";
import cart_styles from "./Cart.module.scss";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  let price = 0;

  return (
    <div>
      <div className={cart_styles.cart_wrapper}>
        <div className={cart_styles.cart_sidebar}>
          <form className={cart_styles.cart_form} action="">
            <div className={cart_styles.input_block}>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" className={cart_styles.input} />
            </div>
            <div className={cart_styles.input_block}>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" className={cart_styles.input} />
            </div>
            <div className={cart_styles.input_block}>
              <label htmlFor="phone">Phone:</label>
              <input type="phone" name="phone" className={cart_styles.input} />
            </div>
            <div className={cart_styles.input_block}>
              <label htmlFor="address">Address:</label>
              <input type="text" name="address" className={cart_styles.input} />
            </div>
          </form>
        </div>
        <div className={cart_styles.cart_main_window}>
          {cart.map((item) => {
            return <CartItem item={item} />;
          })}
        </div>
      </div>
      <div className={cart_styles.submit_section}>
        <p className={cart_styles.total_price}>Total price: {price}</p>
        <button className={cart_styles.submit_btn}>Submit</button>
      </div>
    </div>
  );
}

export default Cart;
