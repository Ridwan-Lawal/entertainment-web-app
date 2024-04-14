import { BrowserRouter, Route, Routes } from "react-router-dom";

import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmark from "./pages/Bookmark";
import PageNotFound from "./pages/PageNotFound";
import Homepage from "./pages/Homepage";
import { useMovie } from "./contexts/MovieContext";

function App() {
  const { appSelect } = useMovie();
  return (
    <div
      ref={appSelect}
      className="min-h-screen overflow-auto bg-slate-950 font-poppins pl-8  pr-8 md:pl-10 md:pr-8 py-8 md:py-4 md:pb-12"
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvseries" element={<TvSeries />} />
          <Route path="bookmark" element={<Bookmark />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
