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

const { Header } = Layout;

const items = [
  { label: <NavLink to="/">Home</NavLink>, key: 1 },
  { label: <NavLink to="/donations">All Donations</NavLink>, key: 2 },
  { label: <NavLink to="/dashboard">Dashboard</NavLink>, key: 3 },
  { label: <NavLink to="/about">About</NavLink>, key: 4 },
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
          <div className="menu-items">
            <Menu
              items={items}
              mode="horizontal"
              defaultSelectedKeys={[selectedKey ? selectedKey.toString() : "1"]}
              style={{ flex: 1, minWidth: 0, backgroundColor: "#fff" }}
            >
              {/* <p className="text-gray-700">
                <Link to="/">Home</Link>
              </p> */}
            </Menu>
          </div>

          <Button type="primary" onClick={showDrawer} className="menu-toggle">
            <MenuOutlined />
          </Button>

          <div>
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
