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
    <div className="leading-relaxed text-2xl">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="flex">
            <button
              className="absolute top-1.5 left-1.5 h-16 w-16 rounded-full border-none bg-white text-[#2b3035] shadow-[0_8px_20px_rgba(0,0,0,0.8)] font-sans text-5xl font-bold cursor-pointer z-[999] flex items-center justify-center"
              onClick={onCloseMovie}
            >
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of ${movie} movie`}
              className="w-[33%]"
            />
            <div className="w-full p-6 bg-[#343a40] flex flex-col gap-3.5">
              <h2 className="text-2xl mb-1 leading-tight">{title}</h2>
              <p className="flex items-center gap-2">
                {released} &bull; {runtime}
              </p>
              <p>{genrs}</p>
              <p className="flex items-center gap-2">
                <span>⭐</span>
                {imdbRating}
              </p>
            </div>
          </header>

          <section className="p-16 flex flex-col gap-4">
            <div className="bg-[#343a40] rounded-[0.9rem] p-5 mb-2 font-semibold flex flex-col gap-6">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="bg-[#6741d9] text-[#dee2e6] border-none rounded-[10rem] text-2xl p-4 font-bold cursor-pointer transition-all duration-300 hover:bg-[#7950f2]"
                      onClick={handleAdd}
                    >
                      + Add to list
                    </button>
                  )}{" "}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRaing} <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
