/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import TrendingMovieCard from "./TrendingMovieCard";
import MovieCard from "./MovieCard";
import MovieOverlay from "./MovieOverlay";

export default function TrendingSlider({ videosData }) {
  return (
    <div className="mt-6">
      <h1 className="font-poppins text-white  text-[22px]  sm:text-[27px] mb-6">
        Trending
      </h1>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={-150}
        breakpoints={{
          350: {
            spaceBetween: 10,
          },
          450: {
            spaceBetween: -50,
          },
          530: {
            spaceBetween: -120,
          },
          630: {
            spaceBetween: -180,
          },

          750: {
            spaceBetween: -300,
          },
          800: {
            spaceBetween: -380,
          },
          820: {
            spaceBetween: -400,
          },
          850: {
            spaceBetween: -100,
          },
          1000: {
            spaceBetween: -290,
          },
          1150: {
            spaceBetween: -380,
          },
          1250: {
            spaceBetween: -460,
          },
          1300: {
            spaceBetween: -540,
          },
        }}
        slidesPerView={1.2}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {videosData?.map((video) => (
          <SwiperSlide key={video.id}>
            <TrendingMovieCard key={video.id} video={video}>
              <MovieCard
                movieDetailPostion="absolute"
                movieDetailFont="text-[12px] md:text-base font-medium"
                movieNameFont="text-base md:text-2xl font-semibold"
                video={video}
              >
                <MovieOverlay playMargin="-mt-8" />
              </MovieCard>
            </TrendingMovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
