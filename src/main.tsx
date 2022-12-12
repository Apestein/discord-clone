import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"
import ErrorPage from "./components/ErrorPage"
import Channels from "./components/Channels"
import "./index.css"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "channels/",
    element: <Channels />,
    children: [
      {
        path: ":channelId",
        element: <div>channel inside channels</div>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
