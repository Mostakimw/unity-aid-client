import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Button, Layout, Drawer } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import "./Navbar.css";

const { Header } = Layout;
const { Item } = Menu;

// const items = [
//   {
//     label: "Home",
//     key: 1
//   }
// ]
const items = [
  { label: "Home", key: 1, target: "/" },
  { label: "All Donations", key: 2, target: "/donations" },
  { label: "Dashboard", key: 3, target: "/about" },
  { label: "About", key: 4, target: "/about" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  //! handling menu changing
  const navigate = useNavigate();

  const handleMenuClick = ({ key }: { key: string }) => {
    const keyString = parseInt(key);
    const { target } = items.find((item) => item.key == keyString) || {};
    if (target) {
      navigate(target);
    }
  };

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerOpen(false);
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
              onClick={handleMenuClick}
              mode="horizontal"
              defaultSelectedKeys={["3"]}
              style={{ flex: 1, minWidth: 0, backgroundColor: "#fff" }}
            />
          </div>

          <Button type="primary" onClick={showDrawer} className="menu-toggle">
            <MenuOutlined />
          </Button>

          <div>
            <Link to="/account/login">
              <Button type="text" icon={<UserOutlined />} />
            </Link>
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
          onClick={handleMenuClick}
          defaultSelectedKeys={["1"]}
        />
      </Drawer>
    </Layout>
  );
};

export default Navbar;
