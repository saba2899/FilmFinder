const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export function WatchSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="p-5 rounded-[0.9rem] bg-[#343a40] shadow-[0_1.2rem_2.4rem_rgba(0,0,0,0.2)]">
      <h2 className="uppercase text-2xl mb-3.5">Movies you watched</h2>
      <div className="flex items-center gap-6 text-2xl font-semibold mt-10">
        <p className="flex items-center gap-2">
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex items-center gap-2">
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p className="flex items-center gap-2">
          <span>⏳</span>
          <span>{avgRuntime.toFixed(1)} min</span>
        </p>
      </div>
    </div>
  );
}
