import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./components/App"
import ErrorPage from "./components/ErrorPage"
import Servers from "./components/Servers"
import ChannelIndex from "./components/ChannelIndex"
import ChannelTOP from "./components/ChannelTOP"
import ChannelFireship from "./components/ChannelFireship"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "channels",
    element: <Servers />,
    children: [
      { index: true, element: <ChannelIndex /> },
      {
        path: "TheOdinProject",
        element: <ChannelTOP />,
      },
      {
        path: "Fireship",
        element: <ChannelFireship />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
