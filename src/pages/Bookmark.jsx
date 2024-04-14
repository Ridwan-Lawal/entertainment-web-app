/* eslint-disable react/prop-types */
import BookmarkedVideoList from "../components/BookmarkedVideoList";
import NavBar from "../components/NavBar";
import SearchForm from "../components/SearchForm";
import SearchResultBookmark from "../components/SearchResultBookmark";
import { useMovie } from "../contexts/MovieContext";

function Bookmark() {
  const { searchForm } = useMovie();

  return (
    <div className="md:flex md:flex-row relative  gap-10">
      <div className="md:fixed">
        <NavBar />
      </div>
      <div className=" md:pl-8 md:w-[90%] md:right-0 md:absolute">
        <SearchForm placeholder="Search for bookmarked shows" />

        {searchForm ? (
          <SearchResultBookmark />
        ) : (
          <>
            <div>
              <BookmarkedVideoList category="Movie" />
            </div>
            <div className="mt-10">
              <BookmarkedVideoList category="TV Series" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Bookmark;
