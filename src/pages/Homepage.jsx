/* eslint-disable react/prop-types */
import MoviesListBlock from "../components/MoviesListBlock";
import TrendingSlider from "../components/TrendingSlider";
import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";
import RegularMovieCard from "../components/RegularMovieCard";
import MovieCard from "../components/MovieCard";
import MovieOverlay from "../components/MovieOverlay";
import SearchResults from "../components/SearchResults";

function Homepage({
  videosData,
  dispatch,
  searchForm,
  searchedData,
  formSelect,
}) {
  console.log(searchedData);
  return (
    <div className="md:flex md:flex-row  relative  gap-10">
      <div className="md:fixed ">
        <NavBar videosData={videosData} />
      </div>
      <div className=" md:pl-8 md:w-[90%] md:right-0 md:absolute">
        <SearchForm
          searchForm={searchForm}
          dispatch={dispatch}
          formSelect={formSelect}
        />

        {searchForm ? (
          <SearchResults
            videosData={videosData}
            dispatch={dispatch}
            searchedData={searchedData}
            searchForm={searchForm}
          />
        ) : (
          <>
            <TrendingSlider videosData={videosData} dispatch={dispatch} />
            <MoviesListBlock heading="Recommended for you">
              {videosData.map((video) => (
                <RegularMovieCard key={video.id}>
                  <MovieCard
                    movieDetailPostion=" mt-4"
                    movieNameFont="text-base md:text-lg"
                    dispatch={dispatch}
                    movieDetailFont="text-[11px]"
                    bookmarkWidth="w-2.5"
                    video={video}
                    imageHeight="h-[150px] w-full"
                  >
                    <MovieOverlay playMargin="mt-6" />
                  </MovieCard>
                </RegularMovieCard>
              ))}
            </MoviesListBlock>
          </>
        )}
      </div>
    </div>
  );
}

export default Homepage;
