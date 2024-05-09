import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Button, Layout, Drawer } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import "./Navbar.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logoutUser,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import logo from "./../../../assets/donation.png";

const { Header } = Layout;

const items = [
  {
    label: (
      <div className="flex items-center  lg:mt-[12px] ">
        <img src={logo} alt="logo" className="w-12  mr-2 " />
      </div>
    ),
    key: 1,
  },
  { label: <NavLink to="/">Home</NavLink>, key: 2 },
  { label: <NavLink to="/donations">All Donations</NavLink>, key: 3 },
  {
    label: <NavLink to="/dashboard">Dashboard</NavLink>,
    key: 4,
    requiresAuth: true,
  },
  { label: <NavLink to="/about">About</NavLink>, key: 5 },
];

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const selectedKey = items.find(
    (item) => item.label.props.to == location.pathname
  )?.key;

  const handlerLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="menu-items w-full">
            <Menu
              items={items.filter((item) => !item.requiresAuth || !!user)}
              mode="horizontal"
              defaultSelectedKeys={[selectedKey ? selectedKey.toString() : "1"]}
              style={{ flex: 1, minWidth: 0, backgroundColor: "#fff" }}
            >
              {/* <p className="text-gray-700">
                <Link to="/">Home</Link>
              </p> */}
            </Menu>
          </div>

          <Button
            title="Account"
            type="primary"
            onClick={showDrawer}
            className="menu-toggle"
          >
            <MenuOutlined />
          </Button>

          <div className=" flex justify-end">
            {!user ? (
              <Link to="/account/login">
                <Button type="text" icon={<UserOutlined />} />
              </Link>
            ) : (
              <Button type="primary" onClick={handlerLogout}>
                Logout
              </Button>
            )}
          </div>
        </div>
      </Header>

      <Drawer
        placement="left"
        closable={true}
        onClose={onCloseDrawer}
        open={isDrawerOpen}
      >
        <Menu
          theme="dark"
          mode="vertical"
          items={items}
          defaultSelectedKeys={[selectedKey ? selectedKey.toString() : "1"]}
        />
      </Drawer>
    </Layout>
  );
};

export default Navbar;
