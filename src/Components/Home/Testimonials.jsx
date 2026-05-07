import { FiUser } from "react-icons/fi";
import StarRow from "../UI/StarRow";
import { TESTIMONIALS } from "../../Data/Data";

const Testimonials = ({ testimonials }) => {
  return (
    <section className="px-6 md:px-12 py-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[4px] mb-3">✦ Real Stories ✦</p>
          <h2 className="text-white font-black" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(24px,3.5vw,38px)" }}>
            Nigerians love <span className="text-green-400">NaijaGig.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal bg-gray-950 border border-gray-900 hover:border-green-800/40 rounded-2xl p-6 transition-all hover:-translate-y-0.5" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-green-900/20 border border-green-800/30 flex items-center justify-center">
                    <FiUser className="text-green-500" size={16} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">{t.name}</p>
                    <p className="text-white text-[10px]">{t.role}</p>
                  </div>
                </div>
                <StarRow rating={t.rating} size="text-[10px]" />
              </div>
              <p className="text-white text-sm leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;