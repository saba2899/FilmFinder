export function Logo() {
  return (
    <div className="flex items-center gap-2 lg:gap-3 lg:justify-self-start group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
        <span role="img" className="relative text-2xl lg:text-5xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">🍿</span>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-all duration-300">
          FilmFinder
        </h1>
        <span className="text-xs lg:text-sm text-slate-400 font-medium tracking-wide opacity-80 hidden sm:block">
          Discover • Rate • Remember
        </span>
      </div>
    </div>
  );
}
