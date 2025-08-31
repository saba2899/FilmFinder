export function Main({ children }) {
  return (
    <main className="flex flex-col w-full gap-12 lg:flex-row lg:gap-8">
      {children}
    </main>
  );
}
