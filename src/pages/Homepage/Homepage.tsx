import Banner from "../../components/UI/Home/Banner/Banner";
import DonationSection from "../../components/UI/Home/DonationSection/DonationSection";
import Gallery from "../../components/UI/Home/Gallery/Gallery";
import Summery from "../../components/UI/Home/Summery/Summery";
import Testimonial from "../../components/UI/Home/Testimonial/Testimonial";

const Homepage = () => {
  return (
    <div style={{ marginTop: 70 }}>
      <Banner />
      <DonationSection />
      <Summery />
      <Gallery />
      <Testimonial />
    </div>
  );
};

export default Homepage;
