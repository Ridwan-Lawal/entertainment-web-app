// eslint-disable-next-line react/prop-types
function MovieBookmarkLogo({ children, onClick }) {
  return (
    <section
      onClick={onClick}
      className="absolute  right-4 top-4   py-2 px-[9px] rounded-full bg-black bg-opacity-40 z-20"
    >
      {children}
    </section>
  );
}

export default MovieBookmarkLogo;
