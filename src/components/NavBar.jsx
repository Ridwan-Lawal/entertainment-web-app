/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import IconNavHome from "../assets/IconNavHome";
import IconNavMovie from "../assets/IconNavMovie";
import IconNavTvSeries from "../assets/IconNavTvSeries";
import IconNavBookmark from "../assets/IconNavBookmark";

// eslint-disable-next-line react/prop-types
function NavBar({ videosData }) {
  const isNavLinkActive = (path) => {
    return window.location.pathname === path;
  };

  const bookmarkedVideos = videosData?.filter((video) => video.isBookmarked);
  console.log(bookmarkedVideos);

  return (
    <nav className="bg-slate-900 flex items-center justify-between md:py-8 md:px-6 px-4 rounded-2xl py-2 md:flex-col  md:fixed   md:h-[90vh] md:mt-5 md:buttom-0 z-10">
      <Logo />

      <ul className="flex items-center gap-10 md:flex-col ">
        <li>
          <NavLink to="/" className="group">
            <IconNavHome isActive={isNavLinkActive("/")} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">
            <IconNavMovie isActive={isNavLinkActive("/movies")} />
          </NavLink>
        </li>

        <li>
          <NavLink to="/tvseries">
            <IconNavTvSeries isActive={isNavLinkActive("/tvseries")} />
          </NavLink>
        </li>
        <li className="relative">
          <NavLink to="/bookmark">
            <IconNavBookmark isActive={isNavLinkActive("/bookmark")} />

            {bookmarkedVideos.length > 0 && (
              <p className="text-white bg-red-500 flex items-center justify-center rounded-full text-xs py-[2px] px-[4px] font-medium absolute -top-3 -right-2.5">
                {bookmarkedVideos.length}
              </p>
            )}
          </NavLink>
        </li>
      </ul>

      <section className="border-2 rounded-full">
        <img src="/src/assets/image-avatar.png" alt="" className="w-[38px]" />
      </section>
    </nav>
  );
}

export default NavBar;
