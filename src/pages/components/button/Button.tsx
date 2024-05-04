import { ConfigProvider, Space, Input, Button } from "antd";
export const UAButton = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#00b96b",
            algorithm: true,
          },
          Input: {
            colorPrimary: "#eb2f96",
            algorithm: true,
          },
        },
      }}
    >
      <Space>
        <Button type="primary" style={{padding: "20px 30px"}}>Submit</Button>
      </Space>
    </ConfigProvider>
  );
};

export default Button;
