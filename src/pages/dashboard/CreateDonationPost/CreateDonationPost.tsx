import { Button, Col, Form, Input, Row } from "antd";
import UAForm from "../../../components/reusable/form/UAForm";
import UAInput from "../../../components/reusable/form/UAInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import { useAddDonationPostMutation } from "../../../redux/features/donation/donationApi";
import { toast } from "sonner";

const CreateDonationPost = () => {
  const [createPost] = useAddDonationPostMutation(undefined);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating");

    const postData = {
      image: data.image,
      title: data.title,
      category: data.category,
      amount: data.amount,
      description: data.description,
      timestamp: new Date(),
      isDeleted: false,
      totalReceived: 0,
    };

    try {
      // creating post data
      const res = await createPost(postData);
      if ("data" in res && res.data.error) {
        toast.success("Post Creation Failed", { id: toastId });
      }
      if ("data" in res && res.data.success) {
        toast.success("Post Created", { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <p className="text-center text-2xl font-semibold font-mono mb-6">
        Create Donation Post
      </p>
      <UAForm onSubmit={onSubmit}>
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
              render={({ field }) => (
                <Form.Item label="Description">
                  <Input.TextArea {...field} placeholder="Write Details" />
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
    </div>
  );
};

export default CreateDonationPost;
