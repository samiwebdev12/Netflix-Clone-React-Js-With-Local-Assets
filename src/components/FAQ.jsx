import { useState } from "react";
import EmailForm from "./EmailForm.jsx";

const faqs = [
  {
    q: "What is Nettflix?",
    a: "Nettflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single advert – all for one low monthly price.",
  },
  {
    q: "How much does Nettflix cost?",
    a: "Watch Nettflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $0.99 to $0.99 a month. No extra costs, no contracts.",
  },
  {
    q: "Where can I watch?",
    a: (
      <>
        <p>
          Watch anywhere, anytime. Sign in with your Nettflix account to watch
          instantly on the web at netflix.com from your personal computer or on
          any internet-connected device that offers the Nettflix app, including
          smart TVs, smartphones, tablets, streaming media players and game
          consoles.
        </p>
        <p className="mt-4">
          You can also download your favourite programmes with the iOS or
          Android app. Use downloads to watch while you're on the go and without
          an internet connection. Take Nettflix with you anywhere.
        </p>
      </>
    ),
  },
  {
    q: "How do I cancel?",
    a: "Nettflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    q: "What can I watch on Nettflix?",
    a: "Nettflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Nettflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    q: "Is Nettflix good for children?",
    a: "The Nettflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="space-y-6" data-purpose="faq-accordion">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-wide">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.q}
              className="faq-item bg-faqCard hover:bg-faqCardHover transition cursor-pointer"
            >
              <button
                aria-expanded={isOpen}
                className="faq-toggle w-full p-5 sm:p-6 xl:p-8 text-left flex justify-between items-center gap-4 text-lg sm:text-2xl xl:text-3xl font-normal focus:outline-none"
                type="button"
                onClick={() => toggle(index)}
              >
                <span>{faq.q}</span>
                <span
                  className="faq-icon text-3xl xl:text-4xl font-light leading-none transform transition-transform duration-200 flex-shrink-0"
                  style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="faq-content px-6 pb-6 text-base sm:text-xl xl:text-2xl text-zinc-200 leading-relaxed border-t border-zinc-700/60 pt-4 space-y-4">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="pt-10 text-center flex flex-col items-center">
        <p className="text-base sm:text-lg xl:text-xl text-gray-200 mb-5 font-light">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <EmailForm />
      </div>
    </section>
  );
}
