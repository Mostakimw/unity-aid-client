import { Button, Col, Row } from "antd";
import UAForm from "../components/form/UAForm";
import UAInput from "../components/form/UAInput";
import { FieldValues } from "react-hook-form";

const Register = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <Row justify="center">
      <Col span={6}>
        <UAForm onSubmit={handleSubmit}>
          <UAInput
            label="Name"
            placeholder="Type your name"
            name="name"
            type="text"
          />
          <UAInput
            label="Email"
            placeholder="Type your Email"
            name="Email"
            type="text"
          />
          <UAInput
            label="Password"
            placeholder="Type your password"
            name="password"
            type="text"
          />
          <div>
            <Button htmlType="submit">Register</Button>
          </div>
        </UAForm>
      </Col>
    </Row>
  );
};

export default Register;
