import { useState } from "react";

export function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative w-[42rem] max-w-[42rem] bg-[#2b3035] rounded-[0.9rem]">
      <button
        className="absolute top-2 right-2 h-8 w-8 rounded-full border-none bg-[#212529] text-[#dee2e6] text-xl font-bold cursor-pointer z-[999]"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
