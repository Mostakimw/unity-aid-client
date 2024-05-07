import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { setUser } from "../../redux/features/auth/authSlice";
import UAForm from "../../components/reusable/form/UAForm";
import UAInput from "../../components/reusable/form/UAInput";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "../../schema/user/user.schema";
// import { UAButton } from "../components/button/Button";

const Login = () => {
  const [loginUser] = useLoginUserMutation(undefined);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging");

    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await loginUser(userInfo).unwrap();

    try {
      if (!res.success) {
        toast.success("Issues when logging", { id: toastId });
      } else {
        toast.success("Logged in", { id: toastId });
        //! verify token
        const user = verifyToken(res.token);
        dispatch(setUser({ user: user, token: res.token }));
        navigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };

  return (
    <Row >
      <Col span={12}>
        <UAForm onSubmit={handleSubmit} resolver={zodResolver(loginUserSchema)}>
          <UAInput
            label="Email:"
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
        </UAForm>
      </Col>
    </Row>
  );
};

export default Login;
