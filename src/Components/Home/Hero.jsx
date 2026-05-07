import { FiSearch } from "react-icons/fi";
import GreenBtn from "../UI/GreenBtn";
import { CATS } from "../../Data/Data";
import bg from "../../assets/gigpic.png";

const Hero = ({ search, setSearch, setPage }) => {
  return (
    <div className="relative z-10">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="absolute inset-0 bg-cover bg-center"
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 text-center w-full">
          <div className="max-w-4xl mx-auto">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 bg-green-900/20 border border-green-800/40 rounded-full px-4 py-1.5 mb-8"
              style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
            >
              <span className="text-base">🇳🇬</span>
              <p className="text-green-400 text-[11px] font-bold uppercase tracking-widest">
                Nigeria's #1 Talent Marketplace
              </p>
            </div>

            {/* Heading */}
            <h1
              className="font-black text-white leading-[1.05] mb-5"
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(44px,7vw,84px)",
                animation: "fadeUp 0.6s ease 0.2s both"
              }}
            >
              Find Nigeria's
              <br />
              <span className="text-green-400">best talent.</span>
              <br />

              <span
                style={{
                  fontSize: "clamp(30px,4.5vw,56px)",
                  fontWeight: 400
                }} className="text-white"
              >
                Any skill. Any city.
              </span>
            </h1>

            {/* Paragraph */}
            <p
              className="text-gray-300 leading-relaxed mb-12 max-w-xl mx-auto"
              style={{
                fontSize: "clamp(14px,1.6vw,17px)",
                animation: "fadeUp 0.6s ease 0.3s both"
              }}
            >
              From web developers to bakers, makeup artists to vulcanizers —
              verified Nigerian professionals ready to work.
              No middleman. Just real Naija talent.
            </p>

            {/* Search */}
            <div
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-14"
              style={{ animation: "fadeUp 0.6s ease 0.4s both" }}
            >
              <div className="flex-1 relative">
                <FiSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={15}
                />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setPage("browse")
                  }
                  placeholder="Search developers, tailors, Lagos..."
                  className="w-full bg-black/70 backdrop-blur-md border border-gray-700 focus:border-green-500 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm outline-none transition-all placeholder-gray-500"
                />
              </div>

              <GreenBtn
                onClick={() => setPage("browse")}
                className="px-6 rounded-xl btn-glow"
              >
                Search
              </GreenBtn>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap justify-center"
              style={{ animation: "fadeUp 0.6s ease 0.5s both" }}
            >
              {[
                ["1,200+", "Verified Pros"],
                ["36", "States Covered"],
                ["4.8★", "Avg Rating"],
                ["50k+", "Jobs Done"]
              ].map(([v, l], i) => (
                <div
                  key={l}
                  className={`px-6 md:px-8 text-center ${
                    i < 3 ? "md:border-r border-gray-700" : ""
                  }`}
                >
                  <p
                    className="font-black text-green-400 text-2xl"
                    style={{ fontFamily: "'Syne',sans-serif" }}
                  >
                    {v}
                  </p>

                  <p className="text-gray-400 text-xs mt-1">{l}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Ticker */}
  <div className="bg-green-600 py-2.5 overflow-hidden border-t border-green-700 border-b border-green-700">
  <div className="flex whitespace-nowrap" style={{ animation: "ticker 40s linear infinite" }}>
    {[...CATS.filter(c => c.id !== "all"), ...CATS.filter(c => c.id !== "all")].map((c, i) => {
      const IconC = c.Icon;
      return (
        <span key={i} className="flex items-center gap-1.5 text-white text-xs font-bold px-6 shrink-0">
          <IconC size={12} /> {c.label} &nbsp;·&nbsp;
        </span>
      );
    })}
  </div>
  </div>

    </div>
  );
};

export default Hero;