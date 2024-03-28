import { Triangle } from "react-loader-spinner";

function Loader() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#2d22b5"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
