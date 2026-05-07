import { useState } from "react";
import { FiX, FiMapPin, FiDollarSign, FiStar, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import GreenBtn from "../UI/GreenBtn";
import Tag from "../UI/Tag";
import StarRow from "../UI/StarRow";
import {CATS} from "../../Data/Data";


const ProfileModal = ({ artisan, onClose, onContact }) => {
  const [tab, setTab] = useState("about");
  const reviews = artisan.testimonials || [];
  const CatInfo = CATS.find(c => c.id === artisan.category) || { Icon: FiTool };
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-[fadeIn_0.2s_ease] overflow-y-auto" onClick={onClose}>
      <div className="bg-gray-950 rounded-2xl max-w-lg w-full shadow-[0_50px_100px_#000] animate-[popIn_0.3s_ease] overflow-hidden border border-gray-900 my-auto" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-gradient-to-br from-green-950 to-black p-7 border-b border-green-900/30 relative">
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors">
            <FiX size={13} />
          </button>
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center shrink-0">
              <CatInfo.Icon className="text-white" size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-white font-black text-xl" style={{ fontFamily: "'Syne',sans-serif" }}>{artisan.name}</h2>
                {artisan.verified && (
                  <span className="bg-green-900/50 border border-green-700/60 text-green-300 rounded-full px-2 py-0.5 text-[9px] font-black flex items-center gap-1">
                    <FiCheckCircle size={9} /> VERIFIED
                  </span>
                )}
              </div>
              <p className="text-green-400 text-sm font-semibold mb-1">{artisan.role}</p>
              <div className="flex items-center gap-1 text-white/50 text-xs mb-2">
                <FiMapPin size={10} /> {artisan.location}
              </div>
              <div className="flex items-center gap-2">
                <StarRow rating={artisan.rating} />
                <span className="text-white font-bold text-xs">{artisan.rating}</span>
                <span className="text-white/40 text-xs">({artisan.reviews})</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-900 bg-black/40">
          {["about", "works", "reviews"].map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest border-b-2 transition-all ${tab === t ? "border-green-500 text-green-400" : "border-transparent text-gray-600 hover:text-gray-400"}`}>
              {t === "about" ? "About" : t === "works" ? "Works" : "Reviews"}
            </button>
          ))}
        </div>

        <div className="p-6">
          {tab === "about" && (
            <div className="flex flex-col gap-4 animate-[fadeIn_0.3s_ease]">
              <p className="text-gray-400 text-sm leading-relaxed">{artisan.bio}</p>
              <div className="flex flex-wrap gap-1.5">{(artisan.tags || []).map(t => <Tag key={t} label={t} />)}</div>
              <div className="bg-black/50 border border-gray-900 rounded-xl p-4 grid grid-cols-2 gap-3">
                {[["Price", artisan.price, FiDollarSign], ["Rating", `${artisan.rating}/5`, FiStar], ["Reviews", `${artisan.reviews}`, FiMessageSquare], ["Location", artisan.location, FiMapPin]].map(([l, v, Icon]) => (
                  <div key={l}>
                    <div className="flex items-center gap-1 text-gray-600 text-[9px] uppercase tracking-wider mb-0.5">
                      <Icon size={9} />{l}
                    </div>
                    <p className="text-white text-xs font-bold">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {tab === "works" && (
            <div className="flex flex-col gap-2.5 animate-[fadeIn_0.3s_ease]">
              {(artisan.works || []).length === 0 ? <p className="text-gray-600 text-center py-6 text-sm">No works added yet.</p> : (artisan.works || []).map((w, i) => (
                <div key={i} className="bg-black/50 border border-gray-900 rounded-xl p-4">
                  <p className="text-white text-sm font-bold mb-1">{w.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
                  <p className="text-green-500 text-[10px] font-bold mt-2">{w.year}</p>
                </div>
              ))}
            </div>
          )}
          {tab === "reviews" && (
            <div className="flex flex-col gap-2.5 animate-[fadeIn_0.3s_ease]">
              {reviews.length === 0 ? <p className="text-gray-600 text-center py-6 text-sm">No reviews yet.</p> : reviews.map((r, i) => (
                <div key={i} className="bg-black/50 border border-gray-900 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <p className="text-white text-sm font-bold">{r.name}</p>
                    <StarRow rating={r.rating} size="text-[10px]" />
                  </div>
                  <p className="text-gray-400 text-xs italic leading-relaxed">"{r.text}"</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-6 pb-6 flex gap-2">
          <GreenBtn onClick={() => { onClose(); onContact(artisan); }} className="flex-1">
            Contact {artisan.name.split(" ")[0]}
          </GreenBtn>
          {artisan.phone && (
            <button onClick={() => window.open(`https://wa.me/${artisan.phone.replace(/\D/g, "")}`, "_blank")}
              className="bg-[#25d366] hover:bg-[#1fba58] text-white rounded-xl px-4 font-bold transition-all flex items-center gap-1.5 text-sm">
              <FiMessageSquare size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;