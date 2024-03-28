/* eslint-disable react/prop-types */
function Error({ errMessage = "Error!" }) {
  return (
    <div className="flex h-screen text-white text-3xl justify-center items-center">
      {errMessage}
    </div>
  );
}

export default Error;
