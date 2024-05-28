import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Create from "./Create/Create";
import Edit from "./Edit/Edit";
import Show from "./Show/Show";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/create",
  //   element: <Create />,
  // },
  // {
  //   path: "/edit",
  //   element: <Edit />,
  // },
  // {
  //   path: "/show",
  //   element: <Show />,
  // },
  
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);