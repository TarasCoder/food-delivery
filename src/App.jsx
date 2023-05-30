import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/routes/cart/Cart";
import MainPage from "./components/routes/main-page/MainPage";
import Shop from "./components/routes/shop/Shop";

import app from "./App.module.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          element: <Shop />,
          index: true,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <div className={app.wrapper}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
