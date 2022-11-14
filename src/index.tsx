import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import { MainPage } from "./views/mainPage";
import { RouteNotFoundError } from "./errors/RouteNotFoundError";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      {
        path: "*",
        loader: () => {
          throw new RouteNotFoundError();
        },
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
