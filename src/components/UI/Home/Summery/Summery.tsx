import { summeryImgAni, summeryText } from "../../../../animation/summery";
import summeryImg from "./../../../../assets/summery.svg";
import donation from "./../../../../assets/summery2.svg";
import { motion } from "framer-motion";

const Summery = () => {
  return (
    <div
      className="summery md:h-[calc(100vh-600px)] lg:h-[calc(100vh-200px)] mt-28"
      style={{
        backgroundImage: `url(${summeryImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "sticky",
      }}
    >
      <div className="mx-auto py-8 px-4 h-full  grid grid-cols-1 gap-5 md:grid-cols-2 justify-items-center place-items-center">
        <div>
          {/* text div */}
          <motion.div
            // viewport={{ once: true }}
            variants={summeryText}
            initial="hidden"
            whileInView="visible"
            className="space-y-4"
          >
            <h1>Nice to meet you</h1>
            <p className="text-justify max-w-md">
              Explore who we are and what we stand for. Committed to
              empowerment, innovation, and sustainability, we strive to make a
              positive impact. Join us on a journey of inspiration and
              possibility. Together, let's shape a brighter future and embrace
              endless opportunities. Welcome to our community.
            </p>
          </motion.div>
        </div>
        {/* image div */}
        <motion.div
          viewport={{ once: true }}
          variants={summeryImgAni}
          initial="hidden"
          whileInView="visible"
          className="py-0"
        >
          <img src={donation} className="w-full h-[400px]" alt="donation img" />
        </motion.div>
      </div>
    </div>
  );
};

export default Summery;
