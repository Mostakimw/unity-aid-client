import Banner from "../../components/Home/Banner/Banner";
import Summery from "../../components/Home/Summery/Summery";
import Testimonial from "../../components/Home/Testimonial/Testimonial";

const Homepage = () => {
  return (
    <div style={{ marginTop: 70, marginBottom: 200 }}>
      <Banner />
      <Testimonial />
      <Summery />
    </div>
  );
};

export default Homepage;
