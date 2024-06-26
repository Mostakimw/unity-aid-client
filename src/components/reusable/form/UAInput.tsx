import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
};

const UAInput = ({ name, type, label, placeholder }: TInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} placeholder={placeholder} />
            {error && <small className="text-red-500">{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default UAInput;
