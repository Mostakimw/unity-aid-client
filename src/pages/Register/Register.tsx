import { Button, Col, Row } from "antd";
import UAForm from "../../components/form/UAForm";
import UAInput from "../../components/form/UAInput";
import { FieldValues } from "react-hook-form";
import { useAddUserMutation } from "../../redux/features/auth/authApi";

const Register = () => {
  const [createUser, { error }] = useAddUserMutation(undefined);
  console.log(error);
  const handleSubmit = async (data: FieldValues) => {
    const res = await createUser(data);
    console.log(res);
  };
  return (
    <Row>
      <Col span={12}>
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
            name="email"
            type="text"
          />
          <UAInput
            label="Password"
            placeholder="Type a password"
            name="password"
            type="text"
          />
          <div>
            <Button htmlType="submit" type="primary" color="#614700">
              Register
            </Button>
          </div>
        </UAForm>
      </Col>
    </Row>
  );
};

export default Register;
