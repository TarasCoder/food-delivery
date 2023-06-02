import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import productItem from "./ProductItem.module.scss";

function ProductItem({ item }) {
  const { name, price, img } = item;
  const { cart, setCart } = useContext(CartContext);
  const addToCart = () => {
    alert("Added to cart!");
    setCart(() => {
      let isThereItem = cart.find((product) => product.id === item.id);
      if (isThereItem) {
        console.log("This item is already in the cart!");
        return cart.map((productItem) => {
          return productItem === isThereItem
            ? { ...productItem, quantity: productItem.quantity + 1 }
            : productItem;
        });
      } else return [...cart, { ...item, quantity: 1 }];
    });
  };
  return (
    <div className={productItem.product_item}>
      <img src={img} alt={name} className={productItem.product_img} />
      <h3 className={productItem.product_name}>{name}</h3>
      <h4 className={productItem.product_price}>{price} $</h4>
      <button onClick={addToCart}>add to Cart</button>
    </div>
  );
}

export default ProductItem;
