import { Col, Row, Tabs } from "antd";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginImg from "./../../assets/login.svg";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Container from "../../components/reusable/Container/Container";

const items = [
  { label: "Login", key: "login", children: <Login /> },
  { label: "Register", key: "register", children: <Register /> },
];

const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("login");

  useEffect(() => {
    // determine the active tab
    const currentTab = location.pathname.split("/").pop();
    if (currentTab === "login" || currentTab === "") {
      setActiveTab("login");
    } else if (currentTab === "register") {
      setActiveTab("register");
    }
  }, [location]);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
    navigate(`/account/${key}`);
  };

  return (
    <Container>
      <Row
        gutter={80}
        justify="center"
        align="middle"
        style={{ minHeight: "100vh", padding: 10 }}
      >
        {/* Right side image */}
        <Col xs={0} sm={{ span: 12 }} className="gutter-row">
          <img
            src={loginImg}
            alt="Image"
            style={{ width: "100%", height: "100%" }}
          />
        </Col>
        {/* Left side content */}
        <Col xs={24} sm={{ span: 12 }} className="gutter-row">
          <Row justify="center">
            <Col span={24}>
              <div style={{ height: "400px" }}>
                {" "}
                {/* Set fixed height and overflow */}
                <Tabs
                  defaultActiveKey="login"
                  items={items}
                  activeKey={activeTab}
                  onTabClick={handleTabClick}
                  animated={false}
                ></Tabs>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Authentication;
