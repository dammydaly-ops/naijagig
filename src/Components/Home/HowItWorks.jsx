import { FiSearch, FiUser, FiMessageSquare, FiTool } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    { n: "01", Icon: FiSearch, title: "Search", desc: "Browse by skill, category, or location. Find verified professionals across Nigeria.", c: "text-green-400" },
    { n: "02", Icon: FiUser, title: "View Profile", desc: "Check their portfolio, read real reviews from past clients, and compare pricing.", c: "text-blue-400" },
    { n: "03", Icon: FiMessageSquare, title: "Contact Directly", desc: "Message or WhatsApp them directly. No middleman. No commission. Just connection.", c: "text-green-300" },
    { n: "04", Icon: FiTool, title: "Are You a Pro?", desc: "Register as an artisan, add your works, and start getting discovered today — it's free.", c: "text-amber-400" },
  ];

  return (
    <section className="bg-gray-950/60 px-6 md:px-12 py-20 border-t border-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[4px] mb-3">✦ Simple ✦</p>
          <h2 className="text-white font-black" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(24px,3.5vw,38px)" }}>
            How <span className="text-green-400">NaijaGig</span> works.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => {
            const IconC = s.Icon;
            return (
              <div key={i} className="reveal bg-gray-950 border border-gray-900 rounded-2xl p-7 relative overflow-hidden hover:border-green-900/60 transition-all hover:-translate-y-1">
                <p className="absolute top-3 right-4 font-black text-gray-900/60 select-none" style={{ fontFamily: "'Syne',sans-serif", fontSize: 52 }}>{s.n}</p>
                <IconC className={`${s.c} mb-4 relative z-10`} size={28} />
                <p className="text-white font-black text-base mb-2 relative z-10" style={{ fontFamily: "'Syne',sans-serif" }}>{s.title}</p>
                <p className="text-white text-xs leading-relaxed relative z-10">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;