import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Authentication from "../pages/Authentication/Authentication";
import About from "../pages/About/About";
import Homepage from "../pages/Homepage/Homepage";
import Donation from "../pages/Donation/AllDonation/AllDonation";
import DonationDetails from "../pages/Donation/DonationDetails/DonationDetails";
import Dashboard from "../pages/dashboard/Dashboard/Dashboard";
import DashboardLayout from "../components/layout/DashboardLayout";
import Sidebar from "../components/layout/Sider/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about", element: <About /> },
      { path: "donations", element: <Donation /> },
      { path: "donations/:id", element: <DonationDetails /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Sidebar />,
    children: [{ index: true, element: <Dashboard /> }],
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
