import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import productItem from "./ProductItem.module.scss";

function ProductItem({ item }) {
  const { name, price, img } = item;
  const { setCart } = useContext(CartContext);
  const addToCart = () => {
    setCart((prev) => [...prev, item]);
  };
  return (
    <div className={productItem.product_item}>
      <img src={img} alt={name} className={productItem.product_img} />
      <h3 className={productItem.product_name}>{name}</h3>
      <h4 className={productItem.product_price}>{price}</h4>
      <button onClick={addToCart}>add to Cart</button>
    </div>
  );
}

export default ProductItem;
