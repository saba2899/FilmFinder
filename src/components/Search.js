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
    <input
      className="justify-self-center py-[1.1rem] px-[1.6rem] text-[#dee2e6] bg-[#7950f2] outline-none text-[1.8rem] rounded-[0.7rem] w-[40rem] transition-all duration-300 placeholder:text-[#adb5bd] focus:outline-none focus:shadow-[0_2.4rem_2.4rem_rgba(0,0,0,0.1)] focus:-translate-y-[2px]"
      name="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
