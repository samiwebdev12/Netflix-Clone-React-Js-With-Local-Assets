import { useRef } from "react";
import { trendingMovies } from "../data/movies.js";

export default function Trending({ onSelect }) {
  const trackRef = useRef(null);

  const scrollByAmount = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.8;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="relative" data-purpose="trending-carousel">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white tracking-wide">
        Trending now
      </h2>
      <div className="relative group">
        <button
          aria-label="Scroll left"
          className="absolute -left-3 sm:-left-8 lg:-left-16 top-1/2 -translate-y-1/2 z-30 h-28 sm:h-32 lg:h-40 w-8 sm:w-10 lg:w-12 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full flex items-center justify-center transition opacity-80 hover:opacity-100 hover:scale-105 focus:outline-none"
          type="button"
          onClick={() => scrollByAmount(-1)}
        >
          <svg className="w-6 h-6 lg:w-7 lg:h-7 fill-current" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          </svg>
        </button>
        <div
          className="flex gap-3 sm:gap-6 xl:gap-8 overflow-x-auto custom-scrollbar py-6 px-3 scroll-smooth"
          ref={trackRef}
        >
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              className="movie-card relative flex-shrink-0 w-32 sm:w-48 lg:w-60 xl:w-64 2xl:w-72 4xl:w-80 h-56 sm:h-72 lg:h-80 xl:h-96 2xl:h-[26rem] 4xl:h-[30rem] cursor-pointer transition duration-300 transform hover:scale-105 rounded-lg overflow-visible group/card"
              onClick={() => onSelect(movie)}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-lg">
                <img alt={movie.title} className="w-full h-full object-cover" src={movie.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <span
                className={`netflix-number-stroke absolute -bottom-4 z-20 ${
                  movie.id === 10 ? "-left-7 text-[5.8rem]" : "-left-4"
                }`}
              >
                {movie.id}
              </span>
            </div>
          ))}
        </div>
        <button
          aria-label="Scroll right"
          className="absolute -right-3 sm:-right-8 lg:-right-16 top-1/2 -translate-y-1/2 z-30 h-28 sm:h-32 lg:h-40 w-8 sm:w-10 lg:w-12 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full flex items-center justify-center transition opacity-80 hover:opacity-100 hover:scale-105 focus:outline-none"
          type="button"
          onClick={() => scrollByAmount(1)}
        >
          <svg className="w-6 h-6 lg:w-7 lg:h-7 fill-current" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
