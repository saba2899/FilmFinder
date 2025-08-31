import { useState, useRef, useEffect } from "react";
import { useKey } from "../useKey";
import { Loader, StarRating } from "../components";

const KEY = "a827004f";

export function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(
    function () {
      if (userRating) countRef.current = countRef.current + 1;
    },
    [userRating]
  );

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRaing = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genrs,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useKey("Escape", onCloseMovie);

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }

      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title]
  );

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
      {isLoading ? (
        <div className="p-8">
          <Loader />
        </div>
      ) : (
        <>
          <header className="relative">
            <button
              className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-gradient-to-r from-slate-700/90 to-slate-600/90 hover:from-slate-600/95 hover:to-slate-500/95 backdrop-blur-sm border border-slate-500/30 text-white rounded-xl p-3 lg:p-4 shadow-xl hover:shadow-2xl cursor-pointer z-10 flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 group"
              onClick={onCloseMovie}
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm lg:text-base font-semibold hidden sm:inline">Back</span>
            </button>
            
            <div className="flex flex-col sm:flex-row">
              <div className="flex-shrink-0 p-4 sm:p-6 lg:p-8">
                <img
                  src={poster}
                  alt={`Poster of ${title} movie`}
                  className="w-full sm:w-48 lg:w-64 rounded-xl shadow-lg border border-slate-600/30"
                />
              </div>
              
              <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">{title}</h2>
                
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg">
                    <span className="text-blue-400 text-sm lg:text-base">📅</span>
                    <span className="text-blue-100 text-sm lg:text-base font-semibold">{released}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg">
                    <span className="text-green-400 text-sm lg:text-base">⏳</span>
                    <span className="text-green-100 text-sm lg:text-base font-semibold">{runtime}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg">
                    <span className="text-yellow-400 text-sm lg:text-base">⭐</span>
                    <span className="text-yellow-100 text-sm lg:text-base font-semibold">{imdbRating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg inline-flex">
                  <span className="text-purple-400 text-sm lg:text-base">🎬</span>
                  <span className="text-purple-100 text-sm lg:text-base font-semibold">{genrs}</span>
                </div>
              </div>
            </div>
          </header>

          <section className="p-4 sm:p-6 lg:p-8 space-y-6 lg:space-y-8">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-4 sm:p-6 lg:p-10 border border-slate-600/30">
              {!isWatched ? (
                <div className="space-y-6 lg:space-y-8">
                  <StarRating
                    maxRating={10}
                    size={40}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-none rounded-xl text-xl lg:text-2xl font-bold py-4 lg:py-6 px-8 cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                      onClick={handleAdd}
                    >
                      + Add to list
                    </button>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 px-6 lg:px-8 py-4 lg:py-6 rounded-lg inline-flex items-center gap-3">
                    <span className="text-emerald-400 text-xl lg:text-2xl">✓</span>
                    <span className="text-emerald-100 font-semibold text-lg lg:text-xl">
                      You rated this movie {watchedUserRaing} ⭐
                    </span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-6 lg:space-y-8 text-slate-300">
              <div className="bg-slate-800/50 rounded-lg p-6 lg:p-8 border border-slate-700/30">
                <p className="italic leading-relaxed text-lg lg:text-xl">{plot}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-slate-800/50 rounded-lg p-6 lg:p-8 border border-slate-700/30">
                  <h4 className="text-slate-400 text-base lg:text-lg font-semibold mb-3 lg:mb-4">STARRING</h4>
                  <p className="text-white text-lg lg:text-xl">{actors}</p>
                </div>
                
                <div className="bg-slate-800/50 rounded-lg p-6 lg:p-8 border border-slate-700/30">
                  <h4 className="text-slate-400 text-base lg:text-lg font-semibold mb-3 lg:mb-4">DIRECTED BY</h4>
                  <p className="text-white text-lg lg:text-xl">{director}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
