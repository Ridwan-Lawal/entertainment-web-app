/* eslint-disable react/prop-types */
import MovieDetails from "./MovieDetails";

import MovieBookmarkLogo from "./MovieBookmarkLogo";

// eslint-disable-next-line react/prop-types
function MovieCard({
  movieDetailPostion = "bottom-6 left-6",
  movieDetailFont,
  movieNameFont,
  bookmarkWidth,
  video,
  imageHeight,
  dispatch,
  children,
}) {
  console.log(`/src${video?.thumbnail?.regular?.large.slice(1)}`);
  return (
    <>
      {/* bookmark logo */}
      <MovieBookmarkLogo
        onClick={() => dispatch({ type: "videoBookmarked", payload: video.id })}
      >
        {video?.isBookmarked ? (
          <img
            src="/src/assets/icon-bookmark-full.svg"
            alt=""
            className={`${bookmarkWidth}`}
          />
        ) : (
          <img
            src="/src/assets/icon-bookmark-empty.svg"
            alt=""
            className={`${bookmarkWidth}`}
          />
        )}
      </MovieBookmarkLogo>

      <div className="relative overflow-hidden rounded-lg">
        {/* movie thumbnail */}
        <img
          src={`/src${video?.thumbnail?.regular?.large.slice(1)}`}
          alt=""
          className={`group-hover:scale-105 transition-all duration-500 ${imageHeight} `}
        />
        {children}
      </div>

      {/* movie details */}
      <section
        className={`${movieDetailPostion} bottom-3 left-3 md:bottom-6 md:left-6 z-20`}
      >
        <MovieDetails
          year={video?.year}
          category={video?.category}
          ageRestriction={video?.rating}
          movieName={video?.title}
          movieDetailFont={movieDetailFont}
          movieNameFont={movieNameFont}
        />
      </section>
    </>
  );
}

export default MovieCard;
