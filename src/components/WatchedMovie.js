export function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <div className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
      <button
        className="absolute z-10 w-8 h-8 text-sm font-bold text-white transition-all duration-200 rounded-full shadow-lg top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-110 active:scale-95"
        onClick={() => onDeleteWatched(movie.imdbID)}
        title="Remove from watched list"
      >
        ×
      </button>

      <div className="flex gap-3 p-3 sm:p-4 sm:gap-4">
        <div className="relative flex-shrink-0">
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="object-cover w-20 border shadow-lg h-28 sm:w-24 sm:h-32 lg:w-28 lg:h-40 rounded-xl border-slate-600/30"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="flex flex-col justify-between flex-1 min-w-0 py-1">
          <div className="space-y-2">
            <h3 className="text-lg font-bold leading-tight text-white sm:text-xl lg:text-2xl">
              {movie.title}
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 px-2.5 py-1 rounded-lg">
                <span className="text-sm text-yellow-400">⭐️</span>
                <span className="text-sm font-semibold text-yellow-100">
                  {movie.imdbRating}
                </span>
              </div>

              <div className="flex items-center gap-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-2.5 py-1 rounded-lg">
                <span className="text-sm text-purple-400">🌟</span>
                <span className="text-sm font-semibold text-purple-100">
                  {movie.userRating}
                </span>
              </div>

              <div className="flex items-center gap-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-2.5 py-1 rounded-lg">
                <span className="text-sm text-green-400">⏳</span>
                <span className="text-sm font-semibold text-green-100">
                  {movie.runtime} min
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between mt-3">
            <div className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
              <span>✓</span>
              <span>Watched</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5 group-hover:opacity-100 rounded-2xl"></div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>
    </div>
  );
}
