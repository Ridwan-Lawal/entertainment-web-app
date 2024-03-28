import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useReducer, useRef } from "react";
import videos from "../local-data/data.json";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmark from "./pages/Bookmark";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";

const initialState = {
  errMessage: "",
  videosData: JSON.parse(localStorage.getItem("videosData")) || videos,
  searchForm: "",
  searchedData: [],
};

function reducer(state, action) {
  switch (action.type) {
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

    case "videosFromStorage":
      return { ...state, videosData: action.payload };

    default:
      throw new Error("Unknown error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const appSelect = useRef(null);
  const formSelect = useRef(null);

  const { videosData, searchForm, searchedData } = state;
  console.log(searchedData);

  // effect for search data
  useEffect(
    function () {
      const searchDataResults = searchForm
        ? videosData.filter((video) =>
            video.title.toLowerCase().includes(searchForm.toLowerCase())
          )
        : [];

      dispatch({ type: "searchedData", payload: searchDataResults });
    },
    [searchForm, videosData]
  );

  // effect for the border-b
  useEffect(function () {
    const curTarget = appSelect.current;
    const formEl = formSelect.current;

    function handleFormFocus(e) {
      if (e.target.closest(".form-input")) {
        formEl.classList.add("border-b");
      }
      if (!e.target.closest(".form-input")) {
        formEl.classList.remove("border-b");
      }
    }
    curTarget.addEventListener("click", handleFormFocus);

    return () => curTarget.removeEventListener("click", handleFormFocus);
  }, []);

  // effect to get data from local storage

  useEffect(function () {
    const videosFromStorage = JSON.parse(localStorage.getItem("videosData"));

    console.log(videosFromStorage);

    if (videosFromStorage) {
      dispatch({ type: "videosFromStorage", payload: videosFromStorage });
    }
  }, []);

  // effect to store data to local storage
  useEffect(
    function () {
      localStorage.setItem("videosData", JSON.stringify(videosData));
    },
    [videosData]
  );

  return (
    <div
      ref={appSelect}
      className="min-h-screen overflow-auto bg-slate-950 font-poppins pl-8  pr-8 md:pl-10 md:pr-8 py-8 md:py-4 md:pb-12"
    >
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
                formSelect={formSelect}
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
                formSelect={formSelect}
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
                formSelect={formSelect}
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
                formSelect={formSelect}
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
