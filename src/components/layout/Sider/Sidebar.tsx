import { Layout, Menu, theme } from "antd";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "./../../../assets/donation.png"

const { Header, Content, Sider } = Layout;

// ! sidebar menu items
const items = [
  { label: <NavLink to="/dashboard">Dashboard</NavLink>, key: 1 },
  {
    label: <NavLink to="/dashboard/create-donation">Create Donation</NavLink>,
    key: 2,
  },
  {
    label: <NavLink to="/dashboard/donations">Donation Posts</NavLink>,
    key: 3,
  },
];

const Sidebar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // selecting menu item key
  const location = useLocation();
  const selectedKey = items.find(
    (item) => item.label.props.to === location.pathname
  )?.key;

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="demo-logo-vertical  h-20 text-center text-2xl flex items-center justify-center">
          <Link to="/" className="text-red-500">
            {/* <h3>Unity Aid</h3> */}
            <img src={logo} alt="" className="w-12"/>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedKey ? selectedKey.toString() : "1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* rendering all dashboard content here */}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
