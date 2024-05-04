import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Authentication from "../pages/Authentication/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
