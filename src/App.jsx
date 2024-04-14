import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMovie } from "./contexts/MovieContext";
import { Suspense, lazy } from "react";
import Loader from "./appstates/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));
const Movies = lazy(() => import("./pages/Movies"));
const TvSeries = lazy(() => import("./pages/TvSeries"));
const Bookmark = lazy(() => import("./pages/Bookmark"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const { appSelect } = useMovie();
  return (
    <div
      ref={appSelect}
      className="min-h-screen overflow-auto bg-slate-950 font-poppins pl-8  pr-8 md:pl-10 md:pr-8 py-8 md:py-4 md:pb-12"
    >
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="tvseries" element={<TvSeries />} />
            <Route path="bookmark" element={<Bookmark />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
