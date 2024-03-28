/* eslint-disable react/prop-types */
function Error({ errMessage = "Error!" }) {
  return <div className="flex justify-center items-center">{errMessage}</div>;
}

export default Error;
