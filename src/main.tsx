import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom"
import App from "./components/App"
import ErrorPage from "./components/ErrorPage"
import Channels from "./components/Channels"
import ChannelIndex from "./components/ChannelIndex"
import ChannelX from "./components/ChannelX"

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
      { index: true, element: <ChannelIndex /> },
      {
        path: ":channelId",
        element: <ChannelX />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
