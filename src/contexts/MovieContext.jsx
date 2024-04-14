/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

import videos from "../local-data/data.json";

const initialState = {
  errMessage: "",
  videosData: videos,
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

  // effect to store data to local storage
  useEffect(
    function () {
      if (state === initialState) return;
      localStorage.setItem("videosData", JSON.stringify(videosData));
    },
    [videosData, state]
  );

  // effect to get data from local storage

  useEffect(function () {
    const videosFromStorage = JSON.parse(localStorage.getItem("videosData"));

    if (!videosFromStorage) return;

    dispatch({ type: "videosFromStorage", payload: videosFromStorage });
  }, []);

  const values = useMemo(() => {
    return {
      videosData,
      searchedData,
      searchForm,
      appSelect,
      formSelect,
      dispatch,
    };
  }, [videosData, searchedData, searchForm, appSelect, formSelect, dispatch]);

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
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
