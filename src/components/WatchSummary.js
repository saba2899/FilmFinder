const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export function WatchSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-700/50 mb-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-xl">
          <span className="text-white text-xl">📊</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white">Movies You Watched</h2>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 p-3 rounded-xl text-center">
          <div className="text-blue-400 text-lg mb-1">#️⃣</div>
          <div className="text-white font-bold text-lg">{watched.length}</div>
          <div className="text-blue-200 text-xs">Movies</div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 p-3 rounded-xl text-center">
          <div className="text-yellow-400 text-lg mb-1">⭐️</div>
          <div className="text-white font-bold text-lg">{avgImdbRating.toFixed(1)}</div>
          <div className="text-yellow-200 text-xs">IMDb Avg</div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-3 rounded-xl text-center">
          <div className="text-purple-400 text-lg mb-1">🌟</div>
          <div className="text-white font-bold text-lg">{avgUserRating.toFixed(1)}</div>
          <div className="text-purple-200 text-xs">Your Avg</div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 p-3 rounded-xl text-center">
          <div className="text-green-400 text-lg mb-1">⏳</div>
          <div className="text-white font-bold text-lg">{avgRuntime.toFixed(0)}</div>
          <div className="text-green-200 text-xs">Avg Runtime</div>
        </div>
      </div>
    </div>
  );
}
