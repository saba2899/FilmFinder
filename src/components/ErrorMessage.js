export function ErrorMessage({ message }) {
  return (
    <p className="text-center text-[2rem] p-[4.8rem]">
      <span>⛔</span>
      {message}
    </p>
  );
}
