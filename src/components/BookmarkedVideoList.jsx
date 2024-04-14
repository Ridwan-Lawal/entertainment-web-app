/* eslint-disable react/prop-types */
import { useMovie } from "../contexts/MovieContext";
import MovieCard from "./MovieCard";
import MoviesListBlock from "./MoviesListBlock";
import RegularMovieCard from "./RegularMovieCard";

function BookmarkedVideoList({ category = "Movie" }) {
  const { videosData, dispatch } = useMovie();

  return (
    <MoviesListBlock heading={`Bookmarked ${category}`}>
      {videosData?.map(
        (video) =>
          video.isBookmarked &&
          video.category === category && (
            <RegularMovieCard key={video.id}>
              <MovieCard
                movieDetailPostion=" mt-4"
                movieNameFont="text-base md:text-lg"
                movieDetailFont="text-[11px]"
                bookmarkWidth="w-2.5"
                video={video}
                imageHeight="h-[150px] w-full"
                dispatch={dispatch}
              />
            </RegularMovieCard>
          )
      )}
    </MoviesListBlock>
  );
}

export default BookmarkedVideoList;
