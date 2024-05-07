import { Button, Col, Form, Input, Row } from "antd";
import UAForm from "../../../components/reusable/form/UAForm";
import UAInput from "../../../components/reusable/form/UAInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateSingleDonationPostMutation } from "../../../redux/features/donation/donationApi";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { createDonationSchema } from "../../../schema/donation/donation.schema";

const UpdateDonationPost = ({
  id,
  setOpen,
}: {
  id: null;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [updatePost] = useUpdateSingleDonationPostMutation(undefined);
  const navigate = useNavigate();

  //! updating post here
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await updatePost({ id, data }).unwrap();
    if (res.success) {
      toast.success("Post Updated");
      navigate("/dashboard/donations");
      setOpen(false);
    }
  };

  return (
    <>
      <UAForm onSubmit={onSubmit} resolver={zodResolver(createDonationSchema)}>
        <Row gutter={20}>
          <Col span={24} md={{ span: 12 }}>
            <UAInput
              type="text"
              label="Image URL:"
              name="image"
              placeholder="Paste image url"
            />
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <UAInput
              type="text"
              label="Category:"
              name="category"
              placeholder="Write category name"
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={24} md={{ span: 12 }}>
            <UAInput
              type="text"
              label="Title:"
              name="title"
              placeholder="Write post title"
            />
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <UAInput
              type="number"
              label="Amount:"
              name="amount"
              placeholder="Total amount to be raised"
            />
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={24} md={{ span: 12 }}>
            <Controller
              name="description"
              render={({ field, fieldState: { error } }) => (
                <Form.Item label="Description">
                  <Input.TextArea {...field} placeholder="Write Details" />
                  {error && (
                    <small className="text-red-500">{error.message}</small>
                  )}
                </Form.Item>
              )}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Button type="primary" htmlType="submit">
            Create Post
          </Button>
        </Row>
      </UAForm>
    </>
  );
};

export default UpdateDonationPost;
