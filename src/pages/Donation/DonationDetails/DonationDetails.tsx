import { Button, Col, Input, Modal, Row } from "antd";
import Container from "../../../components/reusable/Container/Container";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useGetSingleDonationPostQuery } from "../../../redux/features/donation/donationApi";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";

const DonationDetails = () => {
  const user = useAppSelector(selectCurrentUser);
  const [open, setOpen] = useState(false);

  const params = useParams();
  const { data: donationData } = useGetSingleDonationPostQuery(params);

  const navigate = useNavigate();

  const { control, handleSubmit, setValue, watch } = useForm();
  const selectedAmount = watch("amount");

  //! onsubmit handler
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    if (!user) {
      toast.error("Login first");
      navigate("/account/login");
    }
  };

  //! setting watch value by clicking the amounts btn
  const handleButtonClick = (value: number) => {
    setValue("amount", value);
  };

  //! modal start
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    navigate("/dashboard");
    toast.success("Donation Completed");
    // model closing
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  //! modal end

  return (
    <div style={{ marginTop: 70 }}>
      <div className="h-[500px]">
        {/* donation image */}
        <img
          src={donationData?.image}
          alt={donationData?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <Container style={{ marginTop: 30 }}>
        {/* social media */}
        <Row justify="end" className="mb-6">
          <Col>
            <div className="flex items-center gap-4">
              <p className="text-base">Share</p>
              <div className="space-x-3">
                <InstagramOutlined />
                <FacebookOutlined />
                <TwitterOutlined />
                <LinkedinOutlined />
              </div>
            </div>
          </Col>
        </Row>
        {/* donation section start */}
        <div className="bg-[#FEE3BD] py-20 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="text-center pb-4">
              {selectedAmount && (
                <p className="text-xl text-gray-800">
                  You are donating: ${selectedAmount}
                </p>
              )}
            </div>
            <Row justify="center">
              <div className="space-x-1 md:space-x-4 flex  flex-wrap justify-center items-center px-5">
                <button
                  className="amount-btn w-16 h-16"
                  onClick={() => handleButtonClick(25)}
                >
                  $25
                </button>
                <button
                  className="amount-btn text-[17px] w-[68px] h-[68px]"
                  onClick={() => handleButtonClick(50)}
                >
                  $50
                </button>
                <button
                  className="amount-btn text-[18px] w-[72px] h-[72px]"
                  onClick={() => handleButtonClick(100)}
                >
                  $100
                </button>
                <button
                  className="amount-btn text-[19px] w-[76px] h-[76px]"
                  onClick={() => handleButtonClick(200)}
                >
                  $200
                </button>
                <button
                  className="amount-btn text-[20px] w-[80px] h-[80px]"
                  onClick={() => handleButtonClick(350)}
                >
                  $350
                </button>
                <button
                  className="amount-btn text-[21px] w-[84px] h-[84px]"
                  onClick={() => handleButtonClick(500)}
                >
                  $500
                </button>
              </div>
            </Row>
            <p className="text-center pt-4 font-bold text-gray-800">
              Other Amount?
            </p>
            <div className="flex justify-center my-5 max-w-xl mx-auto px-5">
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="Enter custom amount"
                  />
                )}
              />
            </div>
            <div className="flex justify-center">
              {selectedAmount && (
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                  onClick={showModal}
                >
                  Donate
                </Button>
              )}
            </div>
          </form>
          {/* modal information */}
          <Modal
            title="Recheck before confirm"
            open={open}
            onCancel={handleCancel}
            onOk={handleOk}
          >
            <div className="space-y-2 text-gray-800">
              <h4>Your email: {user?.email}</h4>
              <p>
                You are donating: ${selectedAmount} for{" "}
                <span className="font-semibold">{donationData?.title}</span>
              </p>
              <p>If all okay, Please click on ok button.</p>
            </div>
          </Modal>
        </div>

        {/* description section */}
        <div className="mt-10 text-gray-800 space-y-2 text-center">
          <h2>Donation Description</h2>
          <h4 className="font-mono font-light">
            Ready to be a part of something bigger than your thought?
          </h4>
          <h3>Together we ensure the supports that needed to them.</h3>
          <div className="pt-5 space-y-3">
            <p className="text-theme">Details about this donation post:</p>
            <h2>{donationData?.title}</h2>
            <p className="font-light max-w-xl mx-auto">
              {donationData?.description}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DonationDetails;
