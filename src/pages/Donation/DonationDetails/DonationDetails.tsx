import { Button, Col, Input, Row } from "antd";
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

const DonationDetails = () => {
  const { control, handleSubmit, setValue, watch } = useForm();
  const selectedAmount = watch("amount");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const handleButtonClick = (value: number) => {
    console.log(value);
    setValue("amount", value);
  };

  // const handleInputChange = (e: FieldValues) => {
  //   setValue("amount", e.target.value);
  // };

  return (
    <div style={{ marginTop: 70 }}>
      <div className="bg-red-500 h-[500px]">
        <img
          src="https://donate.unhcr.org/sites/default/files/2023-03/rf1251513_dsc02919_1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <Container style={{ marginTop: 30 }}>
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
              <div className="space-x-4">
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
                <Button htmlType="submit" type="primary" size="large">
                  Donate
                </Button>
              )}
            </div>
          </form>
        </div>
        <div className="mt-10 text-gray-800 space-y-2 text-center">
          <h2>Donation Description</h2>
          <h4 className="font-mono font-light">
            Ready to be a part of something bigger than your thought?
          </h4>
          <h3>Together we ensure the supports that needed to them.</h3>
          <div className="pt-5 space-y-3">
            <p className="text-theme">Details about this donation post:</p>
            <p className="font-semibold max-w-xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              neque fugit quibusdam illum ipsum non. Voluptatibus aliquam
              laborum, natus molestiae voluptas sunt enim. Quos, maiores
              molestiae! Recusandae sit, doloremque ducimus quisquam accusamus
              expedita deserunt iure quas, assumenda, iusto reprehenderit
              temporibus.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DonationDetails;
