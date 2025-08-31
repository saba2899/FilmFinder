import { useKey } from "../useKey";
import { useRef } from "react";

export function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <div className="relative w-full max-w-full lg:max-w-2xl xl:max-w-3xl lg:justify-self-center">
      <div className="absolute inset-y-0 left-0 pl-2 lg:pl-4 flex items-center pointer-events-none">
        <svg className="h-4 w-4 lg:h-5 lg:w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <input
        className="w-full pl-8 pr-2 py-2 lg:pl-12 lg:pr-4 lg:py-4 text-white bg-gradient-to-r from-slate-700/50 to-slate-600/50 backdrop-blur-sm border border-slate-500/30 rounded-lg lg:rounded-xl text-sm lg:text-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-slate-600/60 transition-all duration-300 shadow-lg hover:shadow-xl"
        name="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg lg:rounded-xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}
