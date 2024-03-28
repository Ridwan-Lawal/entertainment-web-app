/* eslint-disable react/prop-types */
import BookmarkedVideoList from "../components/BookmarkedVideoList";
import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";
import SearchResultBookmark from "../components/SearchResultBookmark";

function Bookmark({
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
          placeholder="Search for bookmarked shows"
          searchForm={searchForm}
          dispatch={dispatch}
          formSelect={formSelect}
        />

        {searchForm ? (
          <SearchResultBookmark
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
