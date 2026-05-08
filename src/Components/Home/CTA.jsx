import { FiChevronRight } from "react-icons/fi";
import GreenBtn from "../UI/GreenBtn";

const Cta= ({ setScreen }) => {
  return (
    <section className="px-6 md:px-12 py-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="reveal bg-gradient-to-br from-green-950 to-black border border-green-900/40 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden text-white">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-green-600/5 pointer-events-none" />
          <div className="absolute -bottom-12 -left-8 w-48 h-48 rounded-full bg-green-400/4 pointer-events-none" />
          <h2 className="text-white font-black mb-3 relative z-10" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(26px,4vw,46px)" }}>
            Are you a skilled professional?<br /><span className="text-green-400 italic">Get found. Get paid.</span>
          </h2>
          <p className="text-white max-w-md mx-auto mb-9 leading-relaxed text-sm relative z-10">
            Join 1,200+ artisans and professionals already getting clients through NaijaGig. Free to join. No commission.
          </p>
          <GreenBtn onClick={() => setScreen("auth")} className="btn-glow px-10 py-3.5 text-sm rounded-xl mx-auto">
            List Your Services Free <FiChevronRight size={15} />
          </GreenBtn>
        </div>
      </div>
    </section>
  );
};
export default Cta;