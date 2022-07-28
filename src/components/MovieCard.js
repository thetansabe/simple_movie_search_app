import React from "react";

export default function MovieCard({ info }) {
  return (
    <div
      className="movie-card 
        rounded-lg p-3 bg-slate-800 text-white h-full
        flex flex-col select-none"
    >
      <img
        src={process.env.REACT_APP_MOVIEDB_IMAGE + info.poster_path}
        alt={info.title}
        className="w-full h-[250px] object-cover rounded-lg"
      />

      <div className="flex flex-col flex-1">
        <h3 className=" font-bold text-lg py-6">{info.title}</h3>

        <div className="flex items-center justify-between  text-sm opacity-50">
          <span>{info.release_date}</span>
          <span>{info.vote_average}</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <button className=" py-3 px-6 rounded-lg capitalize bg-primary font-bold">
            Watch
          </button>

          <button className=" text-primary py-3 px-6 rounded-lg capitalize border border-primary font-bold">
            Trailer
          </button>
        </div>
      </div>
    </div>
  );
}
