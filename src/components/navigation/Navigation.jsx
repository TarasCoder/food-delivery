import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import navigation from "./Navigation.module.scss";

function Navigation() {
  const location = useLocation();

  return (
    <div className={navigation.nav}>
      <NavLink
        to="/"
        className={`${navigation.link} ${location.pathname === "/" ? navigation.active_link : ""}`}
        exact
      >
        Shop
      </NavLink>
      <>|</>
      <NavLink
        to="/cart"
        className={`${navigation.link} ${location.pathname === "/cart" ? navigation.active_link : ""}`}
      >
        Shopping Cart
      </NavLink>
    </div>
  );
}

export default Navigation;
