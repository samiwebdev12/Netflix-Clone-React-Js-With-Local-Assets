import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function SignIn() {
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="sign-in-page text-white flex flex-col justify-between min-h-screen">
      <header className="w-full px-6 sm:px-12 md:px-16 py-6 sm:pt-7 sm:pb-4" data-purpose="primary-header">
        <Link aria-label="Nettflix Home" className="inline-block focus:outline-none" to="/">
          <img
            alt="Nettflix"
            className="w-32 sm:w-40 md:w-56 h-auto block"
            src="/assets/images/nettflix-logo.png"
          />
        </Link>
      </header>

      <main
        className="w-full flex-grow flex items-start justify-center pt-8 pb-20 px-4 sm:px-6"
        data-purpose="signin-container"
        style={{ minHeight: "calc(-90px + 100vh)", paddingBottom: 120 }}
      >
        <div className="w-full max-w-[440px] 2xl:max-w-[480px] px-2 sm:px-0">
          <div className="mb-7" data-purpose="form-title-group">
            <h1 className="text-2xl sm:text-3xl sm:text-[2.05rem] font-bold tracking-tight text-white leading-tight mb-2">
              Enter your info to sign in
            </h1>
            <p className="text-sm sm:text-[0.95rem] text-[#cccccc] font-normal">
              Or get started with a new account.
            </p>
          </div>
          <form action="#" className="space-y-4" data-purpose="login-form" method="POST">
            <div className="relative" data-purpose="input-wrapper">
              <label className="sr-only" htmlFor="emailOrPhone">
                Email address or mobile number
              </label>
              <input
                autoComplete="email"
                className="netflix-input w-full px-4 py-4 rounded bg-[#161616]/80 text-white text-base placeholder-[#8c8c8c] border border-[#505050] focus:bg-[#161616]"
                id="emailOrPhone"
                name="emailOrPhone"
                placeholder="Email address or mobile number"
                required
                type="text"
              />
            </div>
            <button
              className="w-full py-3.5 px-6 rounded bg-netflixRed hover:bg-netflixRedHover transition duration-150 text-white font-semibold text-base tracking-wide flex items-center justify-center shadow-md active:scale-[0.99]"
              data-purpose="submit-button"
              type="submit"
            >
              Continue
            </button>
            <div className="pt-4 pb-2" data-purpose="accordion-wrapper">
              <button
                aria-controls="helpAccordionContent"
                aria-expanded={helpOpen}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:underline focus:outline-none"
                id="helpAccordionBtn"
                type="button"
                onClick={() => setHelpOpen((prev) => !prev)}
              >
                <span>Get help</span>
                <svg
                  className="w-4 h-4 transform transition-transform duration-200"
                  fill="none"
                  id="chevronIcon"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ transform: helpOpen ? "rotate(180deg)" : "none" }}
                >
                  <path
                    d="M19 9l-7 7-7-7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </button>
              {helpOpen && (
                <div
                  className="mt-3 text-sm text-[#a6a6a6] space-y-2 border-l-2 border-[#404040] pl-3 py-1"
                  id="helpAccordionContent"
                >
                  <p>
                    <a className="hover:underline text-white" href="#">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    <a className="hover:underline text-white" href="#">
                      Sign in with a sign-in code
                    </a>
                  </p>
                </div>
              )}
            </div>
            <div className="pt-2 text-xs text-[#8c8c8c] leading-relaxed" data-purpose="recaptcha-notice">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </div>
          </form>
        </div>
      </main>

      <Footer variant="signin" />
    </div>
  );
}
