import { useEffect, useState } from "react";
import Container from "../../reusable/Container/Container";
import { TDonation } from "../../../types";
import SectionTitle from "../../reusable/SectionTitle/SectionTitle";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const DonationSection = () => {
  const [data, setData] = useState<TDonation[]>([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <Container style={{ marginTop: 112 }}>
      <SectionTitle>Donation Posts</SectionTitle>
      <div className="mt-16">
        <Row gutter={24}>
          {data.map((item) => (
            <Col
              key={item.donationId}
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
                    <span className="text-[#0C6051] font-light ">
                      ${item.amount}
                    </span>
                  </h3>
                  <Button type="primary" shape="round">
                    Details
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="flex justify-center mt-4">
          <Button type="primary">
            <Link to="/donations">View All Posts</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default DonationSection;
