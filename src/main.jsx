import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Advertise from "./Pages/Ads.jsx";
import Buy from "./Pages/Estate/Buy.jsx";
import Rent from "./Pages/Estate/Rent.jsx";
import Sell from "./Pages/Estate/Sell.jsx";
import About from "./Pages/About.jsx";
//Authentication pages import
import Signup from "./Pages/Authentication/Signup.jsx";
import Login from "./Pages/Authentication/Login.jsx";
//
import Help from "./Pages/Help.jsx";
import Agent from "./Pages/Estate/Agent.jsx";

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
    path: "/login",
    element: <Login />,
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
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>
);
