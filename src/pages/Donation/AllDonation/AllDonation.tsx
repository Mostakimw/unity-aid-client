import { Row } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useGetAllDonationPostQuery } from "../../../redux/features/donation/donationApi";
import { TDonation } from "../../../types";
import Container from "../../../components/reusable/Container/Container";
import DonationPostCard from "../../../components/UI/Home/DonationSection/DonationPostCard";

const Donation = () => {
  const { data: donationPosts } = useGetAllDonationPostQuery(undefined);

  return (
    <div style={{ marginTop: 70 }}>
      <Container style={{ marginTop: 112 }}>
        <Row className="text-theme">
          <h2 className="text-theme mr-2">Donate Now to help peoples</h2>{" "}
          <CaretDownOutlined className="text-2xl" />
        </Row>
        <div className="mt-10">
          <Row gutter={24}>
            {donationPosts.data.map((item: TDonation) => (
              <DonationPostCard key={item._id} item={item} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Donation;
