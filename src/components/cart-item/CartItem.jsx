import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import cartItem from "./CartItem.module.scss";

function CartItem({ item }) {
  const { name, img, quantity } = item;
  const { setCart } = useContext(CartContext);
  return (
    <div className={cartItem.product_item}>
      <img src={img} alt={name} className={cartItem.product_img} />
      <h4 className={cartItem.product_name}>{name}</h4>
      <input
        type="number"
        value={quantity ? quantity : 1}
        className={cartItem.product_quantity}
      />
    </div>
  );
}

export default CartItem;
