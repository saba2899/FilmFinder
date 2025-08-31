import { Movie } from "../components";

export function MovieList({ movies, onSelectMovie, watched = [] }) {
  return (
    <div className="space-y-4 p-3 sm:p-4">
      {movies?.map((movie) => {
        const isWatched = watched.some(watchedMovie => watchedMovie.imdbID === movie.imdbID);
        return (
          <Movie 
            movie={movie} 
            key={movie.imdbID} 
            onSelectMovie={onSelectMovie}
            isWatched={isWatched}
          />
        );
      })}
      {movies?.length === 0 && (
        <div className="text-center py-16 px-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-xl border border-slate-700/50">
            <div className="text-7xl mb-6 opacity-60">🎬</div>
            <h3 className="text-xl font-bold text-white mb-2">No movies found</h3>
            <p className="text-slate-400 leading-relaxed">
              Search for your favorite movies using the search bar above
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
