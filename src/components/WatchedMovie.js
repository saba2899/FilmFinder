export function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li className="relative grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-6 text-xl items-center p-4 border-b border-[#343a40]">
      <img
        src={movie.poster}
        alt={`${movie.Title} poster`}
        className="w-full row-span-2"
      />
      <h3 className="text-3xl">{movie.title}</h3>
      <div className="flex items-center gap-6">
        <p className="flex items-center gap-2">
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className="absolute right-6 h-8 w-8 rounded-full border-none bg-[#fa5252] text-[#212529] text-xl font-bold cursor-pointer transition-all duration-300 hover:bg-[#e03131]"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
