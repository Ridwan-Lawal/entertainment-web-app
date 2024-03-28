/* eslint-disable react/prop-types */
import MovieCard from "../components/MovieCard";
import MoviesListBlock from "../components/MoviesListBlock";
import NavBar from "../components/NavBar";
import RegularMovieCard from "../components/RegularMovieCard";
import SearchForm from "../components/SearchForm";
import SearchResultCategory from "../components/SearchResultCategory";

function Movies({
  videosData,
  dispatch,
  searchForm,
  searchedData,
  formSelect,
}) {
  return (
    <div className="md:flex md:flex-row relative  gap-10">
      <div className="md:fixed">
        <NavBar videosData={videosData} />
      </div>
      <div className=" md:pl-8 md:w-[90%] md:right-0 md:absolute">
        <SearchForm
          dispatch={dispatch}
          searchForm={searchForm}
          placeholder="Search for Movie"
          formSelect={formSelect}
        />

        {searchForm ? (
          <SearchResultCategory
            searchForm={searchForm}
            searchedData={searchedData}
            category="Movie"
          />
        ) : (
          <>
            <MoviesListBlock heading="Movies">
              {videosData?.map(
                (video) =>
                  video.category === "Movie" && (
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
                  )
              )}
            </MoviesListBlock>
          </>
        )}
      </div>
    </div>
  );
}

export default Movies;
