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
import Sidebar from "../components/layout/Sider/Sidebar";
import AllDonationPosts from "../pages/dashboard/AllDonationPosts/AllDonationPosts";
import CreateDonationPost from "../pages/dashboard/CreateDonationPost/CreateDonationPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // ! main layout
    children: [
      { index: true, element: <Homepage /> },
      { path: "about", element: <About /> },
      { path: "donations", element: <Donation /> },
      { path: "donations/:id", element: <DonationDetails /> },
    ],
  },
  // ! dashboard
  {
    path: "/dashboard",
    element: <Sidebar />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "donations", element: <AllDonationPosts /> },
      { path: "create-donation", element: <CreateDonationPost /> },
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
