export default function Button({ children }) {
  return (
    <button className="border-primary bg-primary hover:outline-primary hover:text-primary flex items-center rounded-lg border-2 px-3 py-1 text-white transition delay-75 ease-in-out hover:bg-white hover:outline-2 sm:mt-3 xl:py-3">
      {children}
    </button>
  );
}
