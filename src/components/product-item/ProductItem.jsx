import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ShopContext } from "../../contexts/ShopContext";
import productItem from "./ProductItem.module.scss";

function ProductItem({ item }) {
  const { name, price, img } = item;
  const { cart, setCart } = useContext(CartContext);
  const { setIsProductSet } = useContext(ShopContext);

  const addToCart = () => {
    setIsProductSet(true);
    alert("Added to cart!");
    setCart(() => {
      let isThereItem = cart.find((product) => product.id === item.id);
      if (isThereItem) {
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
