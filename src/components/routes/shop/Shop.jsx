import React, { useContext } from "react";
import { shops } from "../../../Data/Shops";
import ProductItem from "../../product-item/ProductItem";
import { ShopContext } from "../../../contexts/ShopContext";
import shop_styles from "./Shop.module.scss";

function Shop() {
  const { currentShop, setCurrentShop } = useContext(ShopContext);

  const chooseCurrentShop = (ev) => {
    const shopToDisplay = shops.find(
      (item) => item.title === ev.target.innerText
    );
    shopToDisplay ? setCurrentShop(shopToDisplay) : setCurrentShop(null);
  };
  return (
    <div className={shop_styles.shop_wrapper}>
      <div className={shop_styles.shop_sidebar}>
        <p className={shop_styles.title}>Shops:</p>
        {shops.map((item) => {
          return (
            <div
              key={item.id}
              className={shop_styles.shop_item}
              onClick={chooseCurrentShop}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className={shop_styles.shop_main_window}>
        {currentShop ? (
          currentShop.items.map((item) => <ProductItem item={item} />)
        ) : (
          <p>No shop selected</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
