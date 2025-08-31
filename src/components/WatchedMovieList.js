import { WatchedMovie } from "../components";

export function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <div className="space-y-4">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
      {watched.length === 0 && (
        <div className="text-center py-16 px-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-xl border border-slate-700/50">
            <div className="text-7xl mb-6 opacity-60">📺</div>
            <h3 className="text-xl font-bold text-white mb-2">No watched movies yet</h3>
            <p className="text-slate-400 leading-relaxed">
              Movies you mark as watched will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
