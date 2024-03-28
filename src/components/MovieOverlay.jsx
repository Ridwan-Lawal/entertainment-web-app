/* eslint-disable react/prop-types */
function MovieOverlay({ playMargin }) {
  return (
    <section className="bg-black   text-white absolute top-0 w-full h-full bg-opacity-30 flex items-center justify-center ">
      <div
        className={`flex ${playMargin} md:-mt-16 gap-2 items-center  w-fit px-2.5 py-[3px] rounded-full bg-gray-100 bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 `}
      >
        <img src="/src/assets/icon-play.svg" alt="" className="w-3" />
        <p className="text-[10px] font-medium">Play</p>
      </div>
    </section>
  );
}

export default MovieOverlay;
