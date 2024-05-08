import { summeryImgAni, summeryText } from "../../../../animation/summery";
import summeryImg from "./../../../../assets/summery.svg";
import donation from "./../../../../assets/summery2.svg";
import { motion } from "framer-motion";

const Summery = () => {
  return (
    <div
      className="summery  md:h-[calc(100vh-200px)] mt-28 bg-red-500"
      style={{
        backgroundImage: `url(${summeryImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "sticky",
      }}
    >
      <div className="mx-auto py-8 px-4 h-full grid grid-cols-1 gap-5 md:grid-cols-2 justify-items-center place-items-center">
        <div>
          {/* text div */}
          <motion.div
             viewport={{ once: true }}
            variants={summeryText}
            initial="hidden"
            whileInView="visible"
            className="max-w-md space-y-4"
          >
            <h1>Nice to meet you</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              aut, asperiores quisquam harum temporibus, velit natus neque
              voluptatibus nemo esse sequi itaque nihil ratione modi labore ea
              maxime fuga doloribus. Vitae repellat saepe impedit sed officiis
              illo, similique, maiores ipsam quam sequi ab aliquam recusandae.
              Magnam odio molestiae ipsam doloremque.
            </p>
          </motion.div>
        </div>
        {/* image div */}
        <motion.div
          variants={summeryImgAni}
          initial="hidden"
          whileInView="visible"
        >
          <img
            src={donation}
            className=" w-full h-[400px] overflow-hidden"
            alt="donation img"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Summery;
