import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FormPage from "./pages/FormPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormTest from "./pages/FormTest.jsx";
import FormBudget from "./pages/FormBudget.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
  {
    path: "/formBudget",
    element: <FormBudget />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
