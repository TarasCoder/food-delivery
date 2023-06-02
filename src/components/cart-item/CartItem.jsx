import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ShopContext } from "../../contexts/ShopContext";
import deleteIcon from "../../assets/cancel-icon.png";
import cartItem from "./CartItem.module.scss";

function CartItem({ item }) {
  const { name, img, quantity, price } = item;
  const { cart, setCart, setTotalCost } = useContext(CartContext);
  const { setIsProductSet } = useContext(ShopContext);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [totalPrice, setTotalPrice] = useState((price * quantity).toFixed(2));

  useEffect(() => {
    setTotalPrice((price * quantity).toFixed(2));
    calculateTotal(cart);
  }, [currentQuantity]);

  const deleteItem = () => {
    setCart(
      cart.filter((product) => {
        return !(product.id === item.id);
      })
    );
    setTotalCost((prev) => prev - Number(item.price * quantity));
    console.log(cart.length)
    if (cart.length === 1) setIsProductSet(false);
  };

  const calculateTotal = (cart) => {
    let total = 0;
    cart.forEach((element) => {
      setTotalCost((total += element.price * element.quantity));
    });
  };

  const handleChangeQuantity = (ev) => {
    let newQuantity = Number(ev.target.value);
    if (newQuantity >= 0) {
      setCurrentQuantity(ev.target.value);
      setCart(() => {
        return cart.map((productItem) => {
          if (productItem === item) {
            return {
              ...productItem,
              quantity: (productItem.quantity = newQuantity),
            };
          } else {
            return productItem;
          }
        });
      });
    }
  };

  return (
    <div className={cartItem.product_item}>
      <img src={img} alt={name} className={cartItem.product_img} />
      <h4 className={cartItem.product_name}>{name}</h4>
      <h4 className={cartItem.product_name}>{price} $</h4>
      <input
        type="number"
        value={currentQuantity}
        onChange={handleChangeQuantity}
        className={cartItem.product_quantity}
      />
      <h4>Total {totalPrice} $</h4>
      <img
        src={deleteIcon}
        alt="delete icon"
        className={cartItem.delete_icon}
        onClick={deleteItem}
      />
    </div>
  );
}

export default CartItem;
