import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Hearts
        height="100"
        width="100"
        color="#cf2420"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
