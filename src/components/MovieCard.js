import React from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from 'components/buttons/PrimaryButton'

export default function MovieCard({ info }) {
  const navigate = useNavigate();
  const img_src = info.poster_path
    ? process.env.REACT_APP_MOVIEDB_IMAGE + info.poster_path
    : process.env.PUBLIC_URL + "/not_found_movie.jpg";

  return (
    <div
      className="movie-card 
        rounded-lg p-3 bg-slate-800 text-white h-full
        flex flex-col select-none"
    >
      <img
        src={img_src}
        alt={info.title}
        className="w-full h-[250px] object-cover rounded-lg"
      />

      <div className="flex flex-col flex-1">
        <h3 className=" font-bold text-lg py-6">{info.title}</h3>

        <div className="flex items-center justify-between  text-sm opacity-50">
          <span>{info.release_date}</span>
          <span>{info.vote_average}</span>
        </div>

        <div className="mt-4">
          <PrimaryButton
            optionalStyles="bg-primary w-full"
            onClick={() => {
              navigate(`/movie/${info.id}`);
            }}
          >Watch Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
