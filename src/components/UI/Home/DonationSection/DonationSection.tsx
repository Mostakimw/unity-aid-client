import { Button, Row } from "antd";
import { Link } from "react-router-dom";
import Container from "../../../reusable/Container/Container";
import SectionTitle from "../../../reusable/SectionTitle/SectionTitle";
import { useGetAllDonationPostQuery } from "../../../../redux/features/donation/donationApi";
import DonationPostCard from "./DonationPostCard";
import { TDonation } from "../../../../types";

const DonationSection = () => {
  const { data: donationPosts, isFetching } =
    useGetAllDonationPostQuery(undefined);
  console.log(donationPosts);

  if (isFetching) {
    return <>Loading...</>;
  }
  return (
    <Container style={{ marginTop: 112 }}>
      <SectionTitle>Donation Posts</SectionTitle>
      <div className="mt-16">
        <Row gutter={24}>
          {donationPosts?.data?.map((item: TDonation) => (
            <DonationPostCard key={item._id} item={item} />
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
