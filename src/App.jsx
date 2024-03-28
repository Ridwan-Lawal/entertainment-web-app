import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmark from "./pages/Bookmark";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import { useEffect, useReducer } from "react";
import SearchResults from "./components/SearchResults";

const initialState = {
  status: "loading",
  errMessage: "",
  videosData: [],
  searchForm: "",
  searchedData: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "dataFailed":
      return { ...state, status: "error", errMessage: action.payload };

    case "dataReady":
      return { ...state, status: "ready", videosData: action.payload };

    case "videoBookmarked":
      return {
        ...state,
        videosData: state.videosData.map((video) =>
          video.id === action.payload
            ? { ...video, isBookmarked: !video.isBookmarked }
            : video
        ),
      };

    case "searchFormChange":
      return { ...state, searchForm: action.payload };

    case "searchedData":
      return { ...state, searchedData: action.payload };

    default:
      throw new Error("Unknown error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { videosData, searchForm, searchedData } = state;
  console.log(searchedData);

  useEffect(function () {
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function getVideos() {
      try {
        const res = await fetch(`http://localhost:8000/cities`, { signal });
        if (!res.ok) throw new Error("Something went wrong fetching data!");

        const data = await res.json();

        dispatch({ type: "dataReady", payload: data });
      } catch (err) {
        if (err.name === "AbortError") return;
        dispatch({ type: "dataFailed", payload: err.message });
      }
    }
    getVideos();

    return () => abortController.abort();
  }, []);

  useEffect(
    function () {
      const searchDataResults = searchForm
        ? videosData.filter((video) =>
            video.title.toLowerCase().includes(searchForm.toLowerCase())
          )
        : [];

      dispatch({ type: "searchedData", payload: searchDataResults });

      console.log(searchDataResults);
    },
    [searchForm, videosData]
  );

  return (
    <div className="min-h-screen overflow-auto bg-slate-950 font-poppins pl-8 pr-8 md:pl-10 md:pr-8 py-8">
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Homepage
                videosData={videosData}
                searchForm={searchForm}
                dispatch={dispatch}
                searchedData={searchedData}
              />
            }
          />
          <Route
            path="movies"
            element={
              <Movies
                videosData={videosData}
                searchForm={searchForm}
                dispatch={dispatch}
                searchedData={searchedData}
              />
            }
          />
          <Route
            path="tvseries"
            element={
              <TvSeries
                videosData={videosData}
                dispatch={dispatch}
                searchedData={searchedData}
                searchForm={searchForm}
              />
            }
          />
          <Route
            path="bookmark"
            element={
              <Bookmark
                videosData={videosData}
                dispatch={dispatch}
                searchedData={searchedData}
                searchForm={searchForm}
              />
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
