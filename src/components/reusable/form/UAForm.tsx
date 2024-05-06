import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";
import { createDonationSchema } from "../../../schema/donation/donation.schema";

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  resolver?: any;
};

type TCreateDonationSchema = z.infer<typeof createDonationSchema>

const UAForm = ({ children, onSubmit, resolver }: TFormProps) => {
  const methods = useForm<TCreateDonationSchema>({resolver});

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};

export default UAForm;
