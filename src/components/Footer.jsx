export default function Footer({ variant = "home" }) {
  if (variant === "signin") {
    return (
      <footer
        className="w-full bg-[#080808]/90 border-t border-[#1a1a1a] pt-12 pb-14 px-6 sm:px-12 md:px-16 xl:px-24"
        data-purpose="netflix-footer"
      >
        <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
          <p className="text-[0.95rem] text-[#999999] mb-8 font-normal">
            Questions? Call{" "}
            <a className="hover:underline text-[#b3b3b3]" href="tel:08085022730">
              0000 000 0000
            </a>
          </p>
          <nav
            aria-label="Footer Links"
            className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8 text-xs text-[#999999]"
          >
            <div className="flex flex-col space-y-3">
              <a className="hover:underline underline-offset-2" href="#">
                FAQ
              </a>
              <a className="hover:underline underline-offset-2" href="#">
                Privacy
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <a className="hover:underline underline-offset-2" href="#">
                Help Centre
              </a>
              <a className="hover:underline underline-offset-2" href="#">
                Cookie Preferences
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <a className="hover:underline underline-offset-2" href="#">
                Nettflix Shop
              </a>
              <a className="hover:underline underline-offset-2" href="#">
                Corporate Information
              </a>
            </div>
            <div className="flex flex-col space-y-3">
              <a className="hover:underline underline-offset-2" href="#">
                Terms of Use
              </a>
              <a className="hover:underline underline-offset-2" href="#">
                Advert choices
              </a>
            </div>
          </nav>
          <br />
          <p className="text-xs text-zinc-500">
            Notice: This is an unofficial Nettflix UI clone created by{" "}
            <strong>Sami Ullah</strong> for educational and portfolio purposes.
            It is not affiliated with or endorsed by Nettflix.{" "}
            <a
              href="https://samiullahdev.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              View my portfolio
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className="bg-black text-zinc-400 text-sm py-16 px-6 sm:px-12 lg:px-24 xl:px-32 3xl:px-40 border-t border-zinc-800"
      data-purpose="site-footer"
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto space-y-8">
        <div>
          Questions? Call{" "}
          <a className="underline hover:text-white transition" href="tel:08085022730">
            0000&nbsp;000&nbsp;0000
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs xl:text-sm leading-loose">
          <div className="flex flex-col space-y-2">
            <a className="hover:underline" href="#">
              FAQ
            </a>
            <a className="hover:underline" href="#">
              Investor Relations
            </a>
            <a className="hover:underline" href="#">
              Buy gift cards
            </a>
            <a className="hover:underline" href="#">
              Cookie Preferences
            </a>
            <a className="hover:underline" href="#">
              Legal Guarantee
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a className="hover:underline" href="#">
              Help Centre
            </a>
            <a className="hover:underline" href="#">
              Jobs
            </a>
            <a className="hover:underline" href="#">
              Ways to Watch
            </a>
            <a className="hover:underline" href="#">
              Corporate Information
            </a>
            <a className="hover:underline" href="#">
              Legal Notices
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a className="hover:underline" href="#">
              Account
            </a>
            <a className="hover:underline" href="#">
              Nettflix Shop
            </a>
            <a className="hover:underline" href="#">
              Terms of Use
            </a>
            <a className="hover:underline" href="#">
              Contact Us
            </a>
            <a className="hover:underline" href="#">
              Only on Nettflix
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a className="hover:underline" href="#">
              Media Centre
            </a>
            <a className="hover:underline" href="#">
              Redeem gift cards
            </a>
            <a className="hover:underline" href="#">
              Privacy
            </a>
            <a className="hover:underline" href="#">
              Speed Test
            </a>
            <a className="hover:underline" href="#">
              Advert choices
            </a>
          </div>
        </div>
        <p className="text-xs text-zinc-500">
          Notice: This is an unofficial Nettflix UI clone created by{" "}
          <strong>Sami Ullah</strong> for educational and portfolio purposes. It
          is not affiliated with or endorsed by Nettflix.{" "}
          <a
            href="https://samiullahdev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            View my portfolio
          </a>
          .
        </p>
        <p className="text-[11px] text-zinc-600">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </footer>
  );
}
