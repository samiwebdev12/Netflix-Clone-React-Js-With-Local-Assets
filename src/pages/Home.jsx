import { useState } from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Trending from "../components/Trending.jsx";
import Features from "../components/Features.jsx";
import FAQ from "../components/FAQ.jsx";
import Footer from "../components/Footer.jsx";
import MovieModal from "../components/MovieModal.jsx";

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="bg-black text-white font-sans antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <main className="relative z-20 bg-black pt-12 pb-24 px-4 sm:px-12 lg:px-24 xl:px-28 3xl:px-32 space-y-16 3xl:space-y-24 max-w-7xl 2xl:max-w-[96rem] 4xl:max-w-[110rem] mx-auto">
        <Trending onSelect={setSelectedMovie} />
        <Features />
        <FAQ />
      </main>
      <Footer />
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
}
