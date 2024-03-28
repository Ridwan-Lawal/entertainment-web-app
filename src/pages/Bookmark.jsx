/* eslint-disable react/prop-types */
import BookmarkedVideoList from "../components/BookmarkedVideoList";
import MovieCard from "../components/MovieCard";
import MoviesListBlock from "../components/MoviesListBlock";
import NavBar from "../components/NavBar";
import RegularMovieCard from "../components/RegularMovieCard";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

function Bookmark({ videosData, dispatch, searchForm, searchedData }) {
  return (
    <div className="md:flex md:flex-row relative  gap-10">
      <div className="md:fixed">
        <NavBar videosData={videosData} />
      </div>
      <div className=" md:pl-8 md:w-[90%] md:right-0 md:absolute">
        <SearchForm
          placeholder="Search for bookmarked shows"
          searchForm={searchForm}
          dispatch={dispatch}
        />

        {searchForm ? (
          <SearchResults
            searchForm={searchForm}
            searchedData={searchedData}
            dispatch={dispatch}
          />
        ) : (
          <>
            <div>
              <BookmarkedVideoList
                dispatch={dispatch}
                videosData={videosData}
                category="Movie"
              />
            </div>
            <div className="mt-10">
              <BookmarkedVideoList
                dispatch={dispatch}
                videosData={videosData}
                category="TV Series"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Bookmark;
