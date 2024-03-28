/* eslint-disable react/prop-types */

function TrendingMovieCard({ children }) {
  return (
    <div className="w-[280px] h-[150px] md:h-full md:w-[450px] md:h-[210px] relative rounded-lg overflow-hidden group cursor-pointer ">
      {children}
    </div>
  );
}

export default TrendingMovieCard;
