import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./routes/ProtectedRoute";

const Routes = () => {
  //The useAuth hook is called to retrieve the token value from the authentication context. It allows us to access the authentication token within the Routes component
  const { token } = useAuth();
  // Route configurations go here
  const routesForPublic = [
    {
      path: "/learnmore",
      element: <div>Learn More</div>,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <div>Home</div>,
        },
        {
          path: "/deals",
          element: <div>Deals</div>,
        },
        {
          path: "/connections",
          element: <div>Connections</div>,
        },
        {
          path: "/territory",
          element: <div>Territory</div>,
        },
        {
          path: "/profile",
          element: <div>Profile</div>,
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/login",
      element: <div>Login</div>,
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};
