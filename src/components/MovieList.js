import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher } from "../utils/config";

//https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1

export default function MovieList(props) {
  const baseLink = `${
    process.env.REACT_APP_MOVIEDB_BASE + props.title
  }?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;

  const { data } = useSWR(baseLink, fetcher);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if(data && data.results) setMovies(data.results);
  }, [data]);

  console.log(movies);
  return (
    <div className="movie-list">
      {/* film list */}
      <Swiper grabCursor="true" spaceBetween={40} slidesPerView="auto">
        {movies.length > 0 && movies.map(movie => (
            <SwiperSlide key={movie.id}>
                <MovieCard info = {movie}></MovieCard>
            </SwiperSlide>
        ))}
        
      </Swiper>
    </div>
  );
}
