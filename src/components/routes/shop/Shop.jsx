import React, { useContext } from "react";
import { shops } from "../../../Data/Shops";
import ProductItem from "../../product-item/ProductItem";
import { ShopContext } from "../../../contexts/ShopContext";
import shop_styles from "./Shop.module.scss";

function Shop() {
  const {
    currentShop,
    setCurrentShop,
    isProductSet,
    // setIsProductSet,
  } = useContext(ShopContext);

  const chooseCurrentShop = (ev) => {
    if (!isProductSet) {
      const shopToDisplay = shops.find(
        (item) => item.title === ev.target.innerText
      );
      shopToDisplay ? setCurrentShop(shopToDisplay) : setCurrentShop(null);
    }
  };
  return (
    <div className={shop_styles.shop_wrapper}>
      <div className={shop_styles.shop_sidebar}>
        <p className={shop_styles.title}>Shops:</p>
        <div id="allShops">
          {shops.map((item) => {
            return (
              <div
                key={item.id}
                id={item.title.replace(/\s/g, "")}
                className={`${shop_styles.shop_item} ${
                  isProductSet ? shop_styles.inactive_shop : ""
                }`}
                onClick={chooseCurrentShop}
              >
                {item.title}
              </div>
            );
          })}
        </div>
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
