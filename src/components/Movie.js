export function Movie({ movie, onSelectMovie, isWatched = false }) {
  return (
    <div
      className={`group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] active:scale-[0.98] ${
        isWatched ? "ring-2 ring-emerald-400/60 shadow-emerald-500/20" : ""
      }`}
      onClick={() => onSelectMovie(movie.imdbID)}
    >
      {isWatched && (
        <div className="absolute z-10 flex items-center gap-1 px-2 py-1 text-xs font-bold text-white rounded-full shadow-lg top-2 right-2 bg-gradient-to-r from-emerald-500 to-emerald-600">
          <span>✓</span>
          <span className="hidden sm:inline">WATCHED</span>
        </div>
      )}

      <div className="flex gap-3 p-3 sm:p-4 lg:p-6 sm:gap-4 lg:gap-6">
        <div className="relative flex-shrink-0">
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            className="object-cover w-20 border shadow-lg h-28 sm:w-24 sm:h-32 lg:w-32 lg:h-48 rounded-xl border-slate-600/30"
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="flex flex-col justify-between flex-1 min-w-0 py-1">
          <div className="space-y-2">
            <h3 className="text-lg font-bold leading-tight text-white transition-colors duration-200 sm:text-xl lg:text-3xl group-hover:text-blue-300">
              {movie.Title}
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-lg">
                <span className="text-sm text-amber-400 lg:text-base">📅</span>
                <span className="text-sm font-semibold text-amber-100 lg:text-base">
                  {movie.Year}
                </span>
              </div>

              {movie.Type && (
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 px-2.5 py-1 lg:px-3 lg:py-1.5 rounded-lg">
                  <span className="text-sm text-blue-400 lg:text-base">🎬</span>
                  <span className="text-sm font-semibold text-blue-100 capitalize lg:text-base">
                    {movie.Type}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-end justify-between mt-3">
            <div className="text-xs font-medium lg:text-sm text-slate-400">
              Tap to view details
            </div>
            <div className="text-blue-400 transition-all opacity-60 group-hover:opacity-100 group-active:scale-110">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 pointer-events-none bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 group-hover:opacity-100 rounded-2xl"></div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/50 to-transparent"></div>
    </div>
  );
}
