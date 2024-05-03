import { Button } from "antd";
import UAForm from "../components/form/UAForm";
import UAInput from "../components/form/UAInput";
import { FieldValues } from "react-hook-form";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const [loginUser] = useLoginUserMutation(undefined);
  const dispatch = useAppDispatch();
  const handleSubmit = async (data: FieldValues) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    const res = await loginUser(userInfo).unwrap();

    const user = verifyToken(res.token);

    dispatch(setUser({ user: user, token: res.token }));
  };
  return (
    <div>
      <UAForm onSubmit={handleSubmit}>
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
        <Button htmlType="submit">Login</Button>
      </UAForm>
    </div>
  );
};

export default Login;
