import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Jobs from "./pages/jobs/Jobs";
import AboutIs from "./pages/aboutIs/AboutIs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Trabalhos",
    element: <Jobs />,
  },
  {
    path: "/Sobre",
    element: <AboutIs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
