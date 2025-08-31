export function NumResults({ movies }) {
  return (
    <div className="lg:justify-self-end flex items-center gap-2">
      <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 px-2 py-1 lg:px-3 lg:py-2 rounded-lg flex items-center gap-1 lg:gap-2">
        <svg className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
        </svg>
        <span className="text-emerald-100 font-semibold text-xs lg:text-base">
          {movies.length} {movies.length === 1 ? 'result' : 'results'}
        </span>
      </div>
    </div>
  );
}
