import React, { createContext, useState } from "react";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [currentShop, setCurrentShop] = useState(null);
  const [isProductSet, setIsProductSet] = useState(false);

  const contextValue = {
    currentShop,
    setCurrentShop,
    isProductSet,
    setIsProductSet
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };