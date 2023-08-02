import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Advertise from "./Pages/ads.jsx";
import Buy from "./Pages/Estate/buy.jsx";
import Rent from "./Pages/Estate/rent.jsx";
import Sell from "./Pages/Estate/sell.jsx";

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/help",
    element: <Help />,
  },
  {
    path: "/ads",
    element: <Advertise />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/rent",
    element: <Rent />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/agent",
    element: <Agent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>
);
