import { Movie } from "../components";

export function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list-none p-2">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
