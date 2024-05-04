import { Button, Col, Row } from "antd";
import UAForm from "../components/form/UAForm";
import UAInput from "../components/form/UAInput";
import { FieldValues } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { setUser } from "../../redux/features/auth/authSlice";
// import { UAButton } from "../components/button/Button";

const Login = () => {
  const [loginUser] = useLoginUserMutation(undefined);
  const dispatch = useAppDispatch();
  const handleSubmit = async (data: FieldValues) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await loginUser(userInfo).unwrap();
    console.log(res);

    const user = verifyToken(res.token);

    dispatch(setUser({ user: user, token: res.token }));
  };
  return (
    <Row>
      <Col span={12}><UAForm onSubmit={handleSubmit}>
        <UAInput
          label="Name:"
          placeholder="Type your email"
          name="email"
          type="text"
        />
        <UAInput
          label="Password:"
          placeholder="Type your password"
          name="password"
          type="text"
        />
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </UAForm></Col>
    </Row>
  );
};

export default Login;
