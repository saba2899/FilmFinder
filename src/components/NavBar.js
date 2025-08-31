export function NavBar({ children }) {
  return (
    <nav className="relative flex flex-col items-center w-full gap-2 px-2 py-2 border shadow-2xl lg:grid lg:grid-cols-3 lg:items-center lg:gap-4 lg:px-8 lg:py-6 bg-gradient-to-br from-slate-800/95 via-slate-700/95 to-slate-800/95 backdrop-blur-lg rounded-lg lg:rounded-2xl border-slate-600/30">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-lg lg:rounded-2xl"></div>
      <div className="relative z-10 flex flex-col w-full gap-2 lg:contents lg:grid lg:grid-cols-3 lg:items-center lg:gap-0">
        {children}
      </div>
    </nav>
  );
}
