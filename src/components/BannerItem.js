import React from 'react'
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from 'components/buttons/PrimaryButton'
//import { getGenre } from '../utils/helper'

export default function BannerItem({info}) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full rounded-lg relative">
        {/* overlay */}
        <div
          className="overlay absolute inset-0 
            bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] rounded-lg "
        ></div>
        {/* content here */}
        <img
          src={process.env.REACT_APP_MOVIEDB_IMAGE_BANNER + info.poster_path}
          alt={info.title}
          className="w-full h-full object-cover rounded-lg object-center"
        />

        <div className="absolute left-5 bottom-5 w-full text-white">
          {/* film name */}
          <h2 className="font-bold text-3xl mb-5">{info.title}</h2>
          {/* film genres */}
          <div className="flex items-center gap-x-3">
            {info.genre_ids.map(genre => (
                <div key={genre} className="py-2 px-4 border border-white rounded-md">
                {genre}
              </div>
            ))}
          </div>

          <PrimaryButton
            optionalStyles="bg-primary mt-4"
            onClick={() => {
              navigate(`/movie/${info.id}`);
            }}
          >Watch Now</PrimaryButton>
        </div>
      </div>
  )
}
