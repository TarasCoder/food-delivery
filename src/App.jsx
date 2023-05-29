import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/routes/cart/Cart";
import Shop from "./components/routes/shop/Shop";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Shop />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
