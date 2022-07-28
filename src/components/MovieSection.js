import React from "react";
import MovieList from "./MovieList";
import { normalize_movie_section } from "../utils/helper";
function MovieSection(props) {
  return (
    <section className="movies-layout mt-10 page-container pb-10">
      <h2 className="text-white mb-5 text-3xl font-bold">{props.title}</h2>

      <MovieList title={normalize_movie_section(props.title)}></MovieList>
    </section>
  );
}

export default MovieSection;
