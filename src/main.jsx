import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ShopContextProvider } from "./contexts/ShopContext";
import { CartContextProvider } from "./contexts/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
