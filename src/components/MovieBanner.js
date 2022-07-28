import React from "react";
import useSWR from "swr";
import { fetcher } from "../utils/config";
import { SwiperSlide, Swiper } from "swiper/react";
import BannerItem from "./BannerItem";

export default function MovieBanner(props) {
  const baseLink = `${process.env.REACT_APP_MOVIEDB_BASE + "popular"}?api_key=${
    process.env.REACT_APP_MOVIEDB_KEY
  }`;

  const { data } = useSWR(baseLink, fetcher);
  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] rounded-lg bg-white page-container overflow-hidden">
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView="auto">
        {movies.length > 0 && movies.map(movie => (
            <SwiperSlide key={movie.id}>
                <BannerItem info={movie} key={movie.id}></BannerItem>
            </SwiperSlide>
        ))}
        
      </Swiper>
      
    </section>
  );
}
