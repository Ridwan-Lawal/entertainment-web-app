/* eslint-disable react/prop-types */

function MoviesListBlock({ children, heading }) {
  return (
    <div className="mt-8 ">
      <h1 className="text-white text-[22px]  sm:text-[27px]">{heading}</h1>

      <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {children}
      </div>
    </div>
  );
}

export default MoviesListBlock;
