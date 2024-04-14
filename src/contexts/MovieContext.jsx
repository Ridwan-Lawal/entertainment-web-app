/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";

import videos from "../local-data/data.json";

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

const MovieContext = createContext();

function MovieProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const appSelect = useRef(null);
  const formSelect = useRef(null);

  const { videosData, searchForm, searchedData } = state;

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
    <MovieContext.Provider
      value={{
        videosData,
        searchedData,
        searchForm,
        appSelect,
        formSelect,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

function useMovie() {
  const value = useContext(MovieContext);
  if (value === undefined)
    throw new Error(
      "You are trying to consume context from a component that isn't a child component of the provider"
    );
  return value;
}

export { MovieProvider, useMovie };
