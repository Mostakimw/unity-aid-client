import Banner from "../../components/Home/Banner/Banner";
import Gallery from "../../components/Home/Gallery/Gallery";
import Summery from "../../components/Home/Summery/Summery";
import Testimonial from "../../components/Home/Testimonial/Testimonial";

const Homepage = () => {
  return (
    <div style={{ marginTop: 70, marginBottom: 200 }}>
      <Banner />
      {/* <Testimonial />
      <Summery /> */}
      <Gallery />
    </div>
  );
};

export default Homepage;
