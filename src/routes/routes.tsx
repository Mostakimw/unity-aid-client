import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Authentication from "../pages/Authentication/Authentication";
import About from "../pages/About/About";
import Homepage from "../pages/Homepage/Homepage";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/account",
    element: <Authentication />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
