export function NavBar({ children }) {
  return (
    <nav className="grid grid-cols-3 items-center  px-[3.2rem] bg-[#6741d9] rounded-[0.9rem] h-[7.2rem]">
      {children}
    </nav>
  );
}
