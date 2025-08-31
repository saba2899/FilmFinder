export function Main({ children }) {
  return (
    <main className="flex flex-col gap-2 w-full lg:flex-row lg:gap-8">
      {children}
    </main>
  );
}
