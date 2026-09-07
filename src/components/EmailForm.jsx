export default function EmailForm() {
  return (
    <form
      className="w-full max-w-2xl xl:max-w-3xl flex flex-col sm:flex-row items-center justify-center gap-3 px-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="relative w-full sm:flex-1">
        <input
          className="w-full px-4 py-4 xl:px-5 xl:py-[1.15rem] rounded bg-black/60 border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition text-base xl:text-lg backdrop-blur-sm"
          placeholder="Email address"
          required
          type="email"
        />
      </div>
      <button
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-netflixRed hover:bg-netflixDarkRed text-white font-bold text-xl xl:text-2xl px-7 py-3.5 xl:px-8 rounded transition duration-200 shrink-0"
        type="submit"
      >
        <span>Get Started</span>
        <svg className="w-5 h-5 xl:w-6 xl:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
        </svg>
      </button>
    </form>
  );
}
