import { FiTool, FiMail, FiPhone, FiMapPin, FiTwitter, FiInstagram, FiLinkedin, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center">
                <FiTool className="text-white text-sm" />
              </div>
              <span className="font-black italic text-white text-xl" style={{ fontFamily: "'Syne',sans-serif" }}>
                Naija<span className="text-green-400">Gig</span>
              </span>
            </div>
            <p className="text-white text-xs leading-relaxed mb-5">
              Nigeria's #1 talent marketplace. Connecting skilled professionals with clients across all 36 states.
            </p>
            <div className="flex gap-3">
              {[FiTwitter, FiInstagram, FiLinkedin].map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-full border border-gray-700 hover:border-green-500 hover:text-green-400 flex items-center justify-center text-gray-500 transition-all">
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <p className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Platform</p>
            <ul className="flex flex-col gap-2.5">
              {["Browse Talents", "Post a Job", "Become an Artisan", "How It Works", "Pricing"].map(l => (
                <li key={l}>
                  <a href="#" className="text-white hover:text-green-400 text-xs transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Categories</p>
            <ul className="flex flex-col gap-2.5">
              {["Tech & Digital", "Trades & Crafts", "Creative Arts", "Professional Services", "Home Services"].map(l => (
                <li key={l}>
                  <a href="#" className="text-white hover:text-green-400 text-xs transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Contact</p>
            <ul className="flex flex-col gap-3">
              {[
                [FiMail, "hello@naijagig.ng"],
                [FiPhone, "+234 800 000 0000"],
                [FiMapPin, "Lagos, Nigeria 🇳🇬"],
              ].map(([Icon, text], i) => (
                <li key={i} className="flex items-center gap-2 text-gray-400 text-xs">
                  <Icon size={13} className="text-green-500 shrink-0" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-white text-xs">
            © 2026 NaijaGig · All rights reserved · Built with <FiHeart className="inline text-green-500 mx-1" size={10} /> for Nigerian talent
          </p>
          <p className="text-white text-xs flex items-center gap-1">
            Created by <span className="text-green-400 font-bold ml-1">Dammy</span>
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(l => (
              <a key={l} href="#" className="text-white hover:text-green-400 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;