import React from "react";
import useSWR from "swr";
import { fetcher } from "utils/config";
import { useParams } from "react-router-dom";
import GenreButton from "components/GenreButton";
import MovieCard from "components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function MovieDetailPage() {
  const { movieId } = useParams();

  const baseLink = `${
    process.env.REACT_APP_MOVIEDB_BASE + parseInt(movieId)
  }?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;

  const { data } = useSWR(baseLink, fetcher);
  if (!data) return null;

  return (
    <div>
      {/* big banner */}
      <div className="w-full h-[600px] relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${
              process.env.REACT_APP_MOVIEDB_IMAGE_BANNER + data.backdrop_path
            })`,
          }}
        ></div>
      </div>

      {/* small img */}
      <div className="h-[400px] max-w-[600px]  relative z-10 p-2 w-1/2 shadow-xl mx-auto -mt-[200px]">
        <img
          src={process.env.REACT_APP_MOVIEDB_IMAGE_BANNER + data.poster_path}
          alt={movieId}
          className="object-cover h-full w-full object-center rounded-xl"
        />
      </div>

      <h1 className="text-center text-3xl font-bold text-white mt-6">
        {data.title}
      </h1>

      <div className="flex items-center justify-center gap-x-5 mb-10 flex-1 flex-wrap">
        {data.genres.length > 0 &&
          data.genres.map((genre) => (
            <GenreButton key={genre.id} name={genre.name}></GenreButton>
          ))}
      </div>

      <p className="text-center text-white">{data.overview}</p>

      <MovieCredits></MovieCredits>
      <MovieTrailers></MovieTrailers>
      <SimilarMovies></SimilarMovies>
    </div>
  );
}

function MovieCredits() {
  const { movieId } = useParams();

  const baseLink = `${
    process.env.REACT_APP_MOVIEDB_BASE + parseInt(movieId)
  }/credits?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;

  const { data } = useSWR(baseLink, fetcher);
  const casts = data?.cast || [];

  return (
    <div className="">
      <h2 className="text-center text-2xl mb-10 mt-10 text-white font-bold">
        Casts
      </h2>

      <div className="grid md:grid-cols-4 gap-5">
        {casts.length > 0 &&
          casts
            .slice(0, 4)
            .map((cast) => (
              <CastItem
                key={cast.id}
                profile_path={cast.profile_path}
                name={cast.name}
              ></CastItem>
            ))}
      </div>
    </div>
  );
}

function CastItem(props) {
  const img_url = props.profile_path
    ? process.env.REACT_APP_MOVIEDB_IMAGE_BANNER + props.profile_path
    : process.env.PUBLIC_URL + "/unknown_person.jpg";

  return (
    <div className="cast-item">
      <img
        src={img_url}
        alt={props.name}
        className="w-full h-[350px] object-cover rounded-lg"
      />

      <h3 className="text-xl text-center font-medium text-white">
        {props.name}
      </h3>
    </div>
  );
}

function MovieTrailers() {
  const { movieId } = useParams();

  const baseLink = `${
    process.env.REACT_APP_MOVIEDB_BASE + parseInt(movieId)
  }/videos?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;

  const { data } = useSWR(baseLink, fetcher);
  const trailers = data?.results || [];

  if (!trailers || trailers.length <= 0) return null;

  return (
    <div className="trailers mt-10 max-w-[800px] mx-auto">
      {trailers.length > 0 &&
        trailers
          .slice(0, 2)
          .map((trailer) => (
            <TrailerItem key={trailer.id} vid_key={trailer.key}></TrailerItem>
          ))}
    </div>
  );
}

function TrailerItem(props) {
  return (
    <div className="mb-10">
      <iframe
        width="800"
        height="480"
        src={`https://www.youtube.com/embed/${props.vid_key}`}
        title={props.title}
        frameBorder="0"
        allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function SimilarMovies() {
  const { movieId } = useParams();

  const baseLink = `${
    process.env.REACT_APP_MOVIEDB_BASE + parseInt(movieId)
  }/similar?api_key=${process.env.REACT_APP_MOVIEDB_KEY}`;

  const { data } = useSWR(baseLink, fetcher);
  const movies = data?.results || [];

  if (!movies || movies.length <= 0) return null;

  return (
    <div className="py-10">
      <h2 className="text-3xl text-white font-medium mb-10">Similar Movies</h2>
      <div className="movie-list">
        <Swiper grabCursor="true" spaceBetween={40} slidesPerView="auto">
          {movies.length > 0 &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard info={movie}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
