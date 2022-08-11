import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import { PaginatedItems } from "../components/PaginatiedItems";
import SearchBar from "../components/SearchBar";
import useDebounce from "../hooks/useDebounce";
import { fetcher } from "../utils/config";

export default function MoviePage() {
  const [nextPage, setNextPage] = useState(1);

  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);

  const baseLink = `${
    process.env.REACT_APP_MOVIEDB_BASE + "now_playing"
  }?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&page=${nextPage}`;

  const [url, setUrl] = useState(baseLink);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `${
          process.env.REACT_APP_MOVIEDB_SEARCH +
          process.env.REACT_APP_MOVIEDB_KEY
        }&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(baseLink);
    }
  }, [filterDebounce, baseLink, nextPage]);

  const { data, err } = useSWR(url, fetcher);
  const loading = !data && !err;
  const movies = data?.results || [];
  // const {page, totalPages} = data
  // console.log("🚀 ~ file: MoviePage.js ~ line 44 ~ MoviePage ~ totalPages", totalPages)
  return (
    <div>
      <SearchBar change={handleFilterChange} stateValue={filter}></SearchBar>

      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="grid grid-cols-4 gap-10">
          {movies.length > 0 &&
            movies.map((movie) => (
              <MovieCard key={movie.id} info={movie}></MovieCard>
            ))}
        </div>
      )}

      <PaginatedItems itemsPerPage={1} data={data} nextPage={setNextPage}></PaginatedItems>
    </div>
  );
}
