import { FaDotCircle } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function MovieDetails({
  year,
  category,
  ageRestriction,
  movieName,
  movieDetailFont,
  movieNameFont,
}) {
  return (
    <div>
      <section
        className={`text-gray-300 font-medium flex ${movieDetailFont} items-center gap-2`}
      >
        <p>{year}</p>
        <FaDotCircle className="w-1" />
        <p className="flex items-center gap-2">
          <img src="/src/assets/icon-category-movie.svg" alt="" /> {category}
        </p>
        <FaDotCircle className="w-1" />
        <p>{ageRestriction}</p>
      </section>
      <p className={`text-white font-medium text-2xl ${movieNameFont} `}>
        {movieName}
      </p>
    </div>
  );
}

export default MovieDetails;
