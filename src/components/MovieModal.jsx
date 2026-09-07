import { useEffect } from "react";

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const genres = movie.genres.split(",").map((g) => g.trim()).filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 2xl:p-10 bg-black/85 backdrop-blur-sm transition-opacity duration-300"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl xl:max-w-4xl 3xl:max-w-5xl max-h-[94vh] overflow-y-auto bg-[#181818] rounded-xl shadow-2xl border border-zinc-800 transform transition duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 z-30 w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center transition border border-zinc-700 focus:outline-none"
          onClick={onClose}
          type="button"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
        <div className="relative h-72 sm:h-[26rem] xl:h-[30rem] 2xl:h-[34rem] w-full overflow-hidden">
          <img alt="Movie banner" className="w-full h-full object-cover" src={movie.cover} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
          <img
            alt="Movie title"
            className="absolute bottom-5 left-6 right-6 z-10 max-h-20 sm:max-h-28 xl:max-h-36 w-auto object-contain drop-shadow-lg"
            src={movie.titleImg}
          />
        </div>
        <div className="px-5 sm:px-8 pb-8 pt-4 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs xl:text-sm font-semibold text-zinc-300">
            <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
              {movie.year}
            </span>
            <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
              {movie.age}
            </span>
            <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700">
              {movie.type}
            </span>
            <div className="flex flex-wrap gap-1">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm sm:text-base xl:text-lg text-zinc-300 leading-relaxed pt-2">
            {movie.desc}
          </p>
          <div className="pt-4">
            <button
              className="flex items-center gap-2 bg-netflixRed hover:bg-netflixDarkRed text-white font-bold text-base xl:text-lg px-6 py-3 rounded transition duration-200 focus:outline-none"
              type="button"
            >
              <span>Get started</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
