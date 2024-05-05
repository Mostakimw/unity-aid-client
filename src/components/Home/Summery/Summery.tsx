import summeryImg from "./../../../assets/summery.svg";
import donation from "./../../../assets/summery2.svg";

const Summery = () => {
  return (
    <div
      className="summery h-80 md:h-[calc(100vh-200px)] mt-28"
      style={{
        backgroundImage: `url(${summeryImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "sticky",
      }}
    >
      <div className="mx-auto py-8 px-4 h-full grid grid-cols-1 md:grid-cols-2 justify-items-center place-items-center">
        <div className="">
          <div className="max-w-md space-y-4">
            <h1>Nice to meet you</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              aut, asperiores quisquam harum temporibus, velit natus neque
              voluptatibus nemo esse sequi itaque nihil ratione modi labore ea
              maxime fuga doloribus. Vitae repellat saepe impedit sed officiis
              illo, similique, maiores ipsam quam sequi ab aliquam recusandae.
              Magnam odio molestiae ipsam doloremque.
            </p>
          </div>
        </div>
        <div className="">
          <img
            src={donation}
            className=" w-full h-[400px] overflow-hidden"
            alt="donation img"
          />
        </div>
      </div>
    </div>
  );
};

export default Summery;
