import { Button, Card, Col } from "antd";
import { TDonation } from "../../../../types";

const DonationPostCard = ({ item }: { item: TDonation }) => {
  return (
    <Col
      span={24}
      md={{ span: 12 }}
      lg={{ span: 8 }}
      className="w-full  gutter-row mb-8"
    >
      <Card
        hoverable
        cover={
          <img
            title={item.title}
            alt="example"
            src={item.image}
            className="w-full h-96  object-cover bg-[#FEE3BD]"
          />
        }
      >
        <div className="flex gap-4 justify-between">
          <p className="text-2xl font-bold truncate">{item.title}</p>
          <p className="mt-[5px] ">#{item.category}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3>
            Amount:{" "}
            <span className="text-[#0C6051] font-light ">${item.amount}</span>
          </h3>
          <Button type="primary" shape="round">
            Details
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default DonationPostCard;
