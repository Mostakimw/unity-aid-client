import { Button, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useAddUserMutation } from "../../redux/features/auth/authApi";
import UAForm from "../../components/reusable/form/UAForm";
import UAInput from "../../components/reusable/form/UAInput";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "../../schema/user/user.schema";

const Register = () => {
  const [createUser] = useAddUserMutation(undefined);
  const navigate = useNavigate();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating You");
    const res = await createUser(data).unwrap();

    try {
      if (!res.success) {
        toast.success("Issues when Registering", { id: toastId });
      } else {
        toast.success("Created. Please Login", { id: toastId });
        navigate("/account/login");
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <Row>
      <Col xs={{ span: 24 }} lg={{ span: 18 }}>
        <UAForm
          onSubmit={handleSubmit}
          resolver={zodResolver(createUserSchema)}
        >
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
