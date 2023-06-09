import React, { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { ShopContext } from "../../../contexts/ShopContext";
import CartItem from "../../cart-item/CartItem";
import { firestore, collection, addDoc } from "../../../Data/Firebase";
import cart_styles from "./Cart.module.scss";

function Cart() {
  const { setIsProductSet } = useContext(ShopContext);

  const { cart, setCart, totalCost, setTotalCost } = useContext(CartContext);
  const formattedTotalCost = Number(totalCost).toFixed(2);
  const isCartEmpty = cart.length === 0;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.phone.trim() === "" ||
      formData.address.trim() === ""
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    const orderData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      cartItems: cart,
      totalCost: formattedTotalCost,
    };

    try {
      const docRef = await addDoc(collection(firestore, "orders"), orderData);
      console.log("Order data added to the database successfully!", docRef.id);
    } catch (error) {
      console.error("Error adding order data to the database:", error);
    }

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    setCart([]);
    setIsProductSet(false);
    setTotalCost(0);
    setTimeout(() => alert("Your order is placed!"), 1000);
  };

  return (
    <div>
      <div className={cart_styles.cart_wrapper}>
        <div className={cart_styles.cart_sidebar}>
          <form className={cart_styles.cart_form}>
            <div className={cart_styles.input_block}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className={cart_styles.input}
                required
              />
            </div>
            <div className={cart_styles.input_block}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className={cart_styles.input}
                required
              />
            </div>
            <div className={cart_styles.input_block}>
              <label htmlFor="phone">Phone:</label>
              <input
                type="phone"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                className={cart_styles.input}
                required
              />
            </div>
            <div className={cart_styles.input_block}>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={formData.address}
                className={cart_styles.input}
                required
              />
            </div>
          </form>
        </div>
        <div className={cart_styles.cart_main_window}>
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className={cart_styles.submit_section}>
        <p className={cart_styles.total_price}>
          Total price: {formattedTotalCost} $
        </p>
        <button
          className={cart_styles.submit_btn}
          onClick={handleSubmit}
          disabled={isCartEmpty}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Cart;
