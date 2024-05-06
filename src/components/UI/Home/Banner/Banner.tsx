import { Button } from "antd";
import "./Banner.css";
import Container from "../../../reusable/Container/Container";

const Banner = () => {
  return (
    <div className="banner" style={{ height: "100vh" }}>
      <Container
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="max-w-xl space-y-5 px-5">
          <h1
            style={{ fontWeight: "bold", fontSize: "3.5rem", color: "white" }}
          >
            Empowering Change Through Donations
          </h1>
          <div className="space-y-5">
            <p className="text-secondary text-white">
              Our mission is to provide vital relief to communities in need
              around the world. With your support, we can make a real difference
              in the lives of those affected by hardship and adversity.
            </p>
            <p className="text-secondary text-white">
              Together, we strive to achieve our goals of providing food,
              shelter, education, and healthcare to those who need it most. Your
              donation can help us reach even more people and create lasting
              positive change.
            </p>
          </div>
          <Button type="primary" size="large" style={{ zIndex: 999 }}>
            Donate Now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
