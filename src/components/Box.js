import { useState } from "react";

export function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative w-full flex-1 bg-[#2b3035] rounded-lg lg:rounded-[0.9rem]">
      <button
        className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-gradient-to-r from-slate-700/90 to-slate-600/90 hover:from-slate-600/95 hover:to-slate-500/95 backdrop-blur-sm border border-slate-500/30 text-white rounded-lg lg:rounded-xl p-1.5 lg:p-3 shadow-lg hover:shadow-xl cursor-pointer z-[999] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <svg className="w-3 h-3 lg:w-5 lg:h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-3 h-3 lg:w-5 lg:h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
      {isOpen && children}
    </div>
  );
}
