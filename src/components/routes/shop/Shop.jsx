import React from "react";
import shop_styles from "./Shop.module.scss";

function Shop() {
  return (
    <div className={shop_styles.shop_wrapper}>
      <div className={shop_styles.shop_sidebar}>left sidebar</div>
      <div className={shop_styles.shop_main_window}>right sidebar</div>
    </div>
  );
}

export default Shop;
