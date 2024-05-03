import { Button } from "antd";
import UAForm from "../components/form/UAForm";
import UAInput from "../components/form/UAInput";
import { FieldValues } from "react-hook-form";

const Login = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log("clicked");
    console.log(data);
  };
  return (
    <div>
      <UAForm onSubmit={handleSubmit}>
        <UAInput
          label="Name:"
          placeholder="Type your name"
          name="name"
          type="text"
        />
        <UAInput
          label="Password:"
          placeholder="Type a password"
          name="password"
          type="text"
        />
        <Button htmlType="submit">Login</Button>
      </UAForm>
    </div>
  );
};

export default Login;
