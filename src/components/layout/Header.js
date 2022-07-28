import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header
      className="header flex items-center justify-center gap-6
         px-6 text-white py-10"
    >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Movies
      </NavLink>
      <NavLink
        to="/animes"
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Anime
      </NavLink>
    </header>
  );
}
