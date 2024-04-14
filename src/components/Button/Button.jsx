export default function Button({ children, width = "w-full", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex ${[width]} items-center justify-center rounded-lg border-2 border-primary bg-primary px-3 py-1 text-center text-white transition delay-75 ease-in-out hover:bg-white hover:text-primary hover:outline-2 hover:outline-primary sm:mt-3 xl:py-3`}
    >
      {children}
    </button>
  );
}
