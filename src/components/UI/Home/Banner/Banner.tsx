import { Button } from "antd";
import "./Banner.css";
import Container from "../../../reusable/Container/Container";
import { motion } from "framer-motion";
import { banner, bannerChild } from "../../../../animation/Banner";

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
        <motion.div
          variants={banner}
          initial="hidden"
          animate="visible"
          // transition={{ duration: 2 }}
          className="max-w-xl space-y-5 px-5"
        >
          <motion.h1
            variants={bannerChild}
            style={{ fontWeight: "bold", fontSize: "3.5rem", color: "white" }}
          >
            Empowering Change Through Donations
          </motion.h1>
          <motion.div variants={bannerChild} className="space-y-5">
            <motion.p
              variants={bannerChild}
              className="text-secondary text-white"
            >
              Our mission is to provide vital relief to communities in need
              around the world. With your support, we can make a real difference
              in the lives of those affected by hardship and adversity.
            </motion.p>
            <motion.p
              variants={bannerChild}
              className="text-secondary text-white"
            >
              Together, we strive to achieve our goals of providing food,
              shelter, education, and healthcare to those who need it most. Your
              donation can help us reach even more people and create lasting
              positive change.
            </motion.p>
          </motion.div>
          <motion.div variants={bannerChild}>
            <Button type="primary" size="large" style={{ zIndex: 999 }}>
              Donate Now
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Banner;
