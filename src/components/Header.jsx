import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-30 px-4 sm:px-12 lg:px-24 xl:px-32 3xl:px-40 py-4 sm:py-6 flex items-center justify-between pointer-events-auto bg-gradient-to-b from-black/80 via-black/40 to-transparent">
      <Link
        aria-label="Nettflix Home"
        className="focus:outline-none focus:ring-2 focus:ring-netflixRed rounded"
        to="/"
      >
        <img
          alt="Nettflix"
          className="w-28 sm:w-44 lg:w-52 xl:w-60 2xl:w-72 4xl:w-80 h-auto block"
          src="/assets/images/nettflix-logo.png"
        />
      </Link>
      <div className="flex items-center space-x-4">
        <Link
          className="bg-netflixRed hover:bg-netflixDarkRed text-white text-sm lg:text-base text-center px-4 sm:px-5 py-2 rounded transition duration-200 shadow focus:outline-none focus:ring-2 focus:ring-white"
          to="/sign-in"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}
