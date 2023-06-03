import React, { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CartItem from "../../cart-item/CartItem";
import { firestore, collection, addDoc } from "../../../Data/Firebase";
import cart_styles from "./Cart.module.scss";

function Cart() {
  const { cart, totalCost } = useContext(CartContext);
  const formattedTotalCost = Number(totalCost).toFixed(2);

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

  const handleSubmit = async () => {
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

    // Clear the form after submitting the order
    // setFormData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   address: "",
    // });

    // Clear the cart after submitting the order
  };

  return (
    <div>
      <div className={cart_styles.cart_wrapper}>
        <div className={cart_styles.cart_sidebar}>
          <form className={cart_styles.cart_form} action="">
            <div className={cart_styles.input_block}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                className={cart_styles.input}
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
        <button className={cart_styles.submit_btn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Cart;
