export function Movie({ movie, onSelectMovie }) {
  return (
    <li
      className="relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-6 text-xl items-center p-4 border-b border-[#343a40] cursor-pointer transition-all duration-300 hover:bg-[#343a40]"
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-full row-span-2"
      />
      <h3 className="text-3xl">{movie.Title}</h3>
      <div className="flex items-center gap-6">
        <p className="flex items-center gap-2">
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
