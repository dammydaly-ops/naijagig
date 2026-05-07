import { FiTool, FiMapPin, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import Tag from "../UI/Tag";
import StarRow from "../UI/StarRow";
import { CATS } from "../../Data/Data";

const ArtisanCard = ({ artisan, onView, onContact }) => {
  const CatInfo = CATS.find(c => c.id === artisan.category) || { Icon: FiTool };
  return (
    <div className="bg-gray-950 border border-gray-900 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:border-green-800/60 hover:shadow-[0_8px_32px_rgba(22,163,74,0.1)] transition-all duration-200"
      onClick={() => onView(artisan)}>
      <div className="h-0.5 bg-gradient-to-r from-green-700 via-green-400 to-green-700" />
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-full bg-green-900/20 border border-green-800/30 flex items-center justify-center shrink-0">
              <CatInfo.Icon className="text-green-400" size={20} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="text-white text-sm font-black leading-tight" style={{ fontFamily: "'Syne',sans-serif" }}>{artisan.name}</p>
                {artisan.verified && <FiCheckCircle className="text-green-500 shrink-0" size={11} />}
              </div>
              <p className="text-green-500 text-[11px] font-semibold mt-0.5">{artisan.role}</p>
              <div className="flex items-center gap-1 text-gray-600 text-[10px] mt-0.5">
                <FiMapPin size={9} /> {artisan.location}
              </div>
            </div>
          </div>
          <div className="bg-green-900/20 border border-green-800/30 rounded-lg px-2 py-1 text-center shrink-0">
            <p className="text-green-400 font-black text-sm leading-none">{artisan.rating}</p>
            <p className="text-white text-[8px] uppercase mt-0.5">rating</p>
          </div>
        </div>
        <p className="text-white text-xs leading-relaxed mb-3 line-clamp-2">{artisan.bio}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(artisan.tags || []).slice(0, 3).map(t => <Tag key={t} label={t} />)}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-gray-900">
          <div>
            <p className="text-white text-[9px]">From</p>
            <p className="text-green-400 font-black text-sm" style={{ fontFamily: "'Syne',sans-serif" }}>{artisan.price}</p>
          </div>
          <div className="flex gap-1.5">
            <button onClick={e => { e.stopPropagation(); onContact(artisan); }}
              className="bg-green-600 hover:bg-green-500 text-white rounded-lg px-3 py-1.5 text-xs font-bold transition-all">
              Contact
            </button>
            {artisan.phone && (
              <button onClick={e => { e.stopPropagation(); window.open(`https://wa.me/${artisan.phone.replace(/\D/g, "")}`, "_blank"); }}
                className="bg-[#25d366] hover:bg-[#1fba58] text-white rounded-lg px-2.5 py-1.5 text-xs transition-all flex items-center">
                <FiMessageSquare size={13} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArtisanCard;