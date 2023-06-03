import React, { useContext, useState, useEffect } from "react";
import ProductItem from "../../product-item/ProductItem";
import { ShopContext } from "../../../contexts/ShopContext";

import { firestore, collection, getDocs } from "../../../Data/Firebase";

import shop_styles from "./Shop.module.scss";

function Shop() {
  const [shopsData, setShopsData] = useState([]);
  useEffect(() => {
    const fetchShopsFromFirestore = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "shops"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setShopsData(data[0].shops);
      } catch (error) {
        console.error("Error fetching shops data from Firestore:", error);
      }
    };

    fetchShopsFromFirestore();
  }, []);

  const {
    currentShop,
    setCurrentShop,
    isProductSet,
  } = useContext(ShopContext);

  const chooseCurrentShop = (ev) => {
    if (!isProductSet) {
      const shopToDisplay = shopsData.find(
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
          {shopsData.map((item) => {
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
