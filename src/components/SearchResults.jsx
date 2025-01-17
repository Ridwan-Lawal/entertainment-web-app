/* eslint-disable react/prop-types */
import { useMovie } from "../contexts/MovieContext";
import MovieCard from "./MovieCard";
import MoviesListBlock from "./MoviesListBlock";

import RegularMovieCard from "./RegularMovieCard";

function SearchResults() {
  const { dispatch, searchForm, searchedData } = useMovie();

  return (
    <div className="md:flex md:flex-row relative  gap-10 ">
      <div className=" md:pl-8 md:w-[90%] ">
        <MoviesListBlock
          heading={`Found ${
            searchedData.length && searchedData.length
          } results for "${searchForm}"`}
        >
          {searchedData?.map((video) => (
            <RegularMovieCard key={video.id}>
              <MovieCard
                dispatch={dispatch}
                movieDetailPostion=" mt-4"
                movieNameFont="text-base md:text-lg"
                movieDetailFont="text-[11px]"
                bookmarkWidth="w-2.5"
                video={video}
                imageHeight="h-[150px] w-full"
              />
            </RegularMovieCard>
          ))}
        </MoviesListBlock>
      </div>
    </div>
  );
}

export default SearchResults;
