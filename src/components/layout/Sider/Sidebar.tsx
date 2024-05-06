import { Layout, Menu, theme } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import DashboardLayout from "../DashboardLayout";

const { Header, Content, Sider } = Layout;

const items = [
  { label: <NavLink to="/dashboard">Dashboard</NavLink>, key: 1 },
  { label: <NavLink to="/create-donation">Create Donation</NavLink>, key: 2 },
  { label: <NavLink to="/all-donation-post">Donation Posts</NavLink>, key: 3 },
];

const Sidebar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const selectedKey = items.find(
    (item) => item.label.props.to === location.pathname
  )?.key;
  console.log(selectedKey);

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="demo-logo-vertical text-red-500 h-20 text-center text-2xl flex items-center justify-center">
          <h3>Unity Aid</h3>
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
            <DashboardLayout />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
