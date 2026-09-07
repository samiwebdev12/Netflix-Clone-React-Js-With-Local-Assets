const reasons = [
  {
    title: "Enjoy on your TV",
    text: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
  },
  {
    title: "Download your series to watch offline",
    text: "Save your favourites easily and always have something to watch.",
  },
  {
    title: "Watch everywhere",
    text: "Stream unlimited films and series on your phone, tablet, laptop and TV.",
  },
  {
    title: "Create profiles for children",
    text: "Send children on adventures with their favourite characters in a space made just for them — free with your membership.",
  },
];

export default function Features() {
  return (
    <section data-purpose="features-grid">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white tracking-wide">
        More reasons to join
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-6">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="relative bg-gradient-to-b from-[#1b1c34] to-[#141226] border border-zinc-800/80 rounded-2xl p-6 xl:p-8 min-h-[260px] xl:min-h-[300px] flex flex-col justify-between overflow-hidden shadow-md group hover:border-zinc-700 transition"
          >
            <div>
              <h3 className="text-xl xl:text-2xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-zinc-400 text-sm xl:text-base leading-relaxed">{reason.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
