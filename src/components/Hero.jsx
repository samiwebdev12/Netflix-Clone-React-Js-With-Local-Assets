import EmailForm from "./EmailForm.jsx";
import heroBackdrop from "../assets/hero/hero-backdrop.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center text-center px-4 sm:px-8 bg-black overflow-hidden"
      data-purpose="hero-banner"
    >
      <div className="absolute inset-0 z-0">
        <img
          alt="Nettflix Catalog Backdrop"
          className="w-full h-full object-cover scale-105 transform transition duration-1000"
          src={heroBackdrop}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/45 to-black/75"></div>
      </div>
      <div className="relative z-20 max-w-4xl lg:max-w-5xl xl:max-w-6xl 3xl:max-w-7xl mx-auto pt-24 sm:pt-28 pb-20 flex flex-col items-center">
        <h1 className="text-[1.75rem] sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] 2xl:text-[4.5rem] 3xl:text-[5rem] 4xl:text-[5.5rem] font-black leading-tight tracking-tight text-white mb-3">
          Unlimited films, series <br /> and more
        </h1>
        <p className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6">
          Starts at $0.99. Cancel at any time.
        </p>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-6 max-w-2xl xl:max-w-3xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <EmailForm />
      </div>
      <div className="hero-glow-arc"></div>
    </section>
  );
}
