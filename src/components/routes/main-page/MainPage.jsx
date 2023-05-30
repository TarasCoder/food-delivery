import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../navigation/Navigation";
import mainPage from "./MainPage.module.scss";

function MainPage() {
  return (
    <div className={mainPage.mainWrapper}>
      <Navigation />
      <div className={mainPage.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;