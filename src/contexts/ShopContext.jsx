import React, { createContext, useState } from "react";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [currentShop, setCurrentShop] = useState(null);

  const contextValue = {
    currentShop,
    setCurrentShop,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };