/* eslint-disable react/prop-types */

function RegularMovieCard({ children }) {
  return (
    <div className="flex gap-8">
      <div className=" w-[100%] relative rounded-lg overflow-hidden group cursor-pointer  ">
        {children}
      </div>
    </div>
  );
}

export default RegularMovieCard;
