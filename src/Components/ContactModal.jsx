import { useState } from "react";
import { FiX, FiUser, FiMail, FiMessageSquare, FiCheck } from "react-icons/fi";
import GreenBtn from "./UI/Greenbtn";
import Input from "./UI/Input";


const ContactModal = ({ artisan, onClose }) => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-[fadeIn_0.2s_ease]" onClick={onClose}>
      <div className="bg-gray-950 border border-green-900/30 rounded-2xl p-8 max-w-md w-full shadow-[0_40px_80px_#000] animate-[popIn_0.3s_ease]" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
          <FiX size={14} />
        </button>
        {!sent ? (
          <>
            <div className="flex gap-3 items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-green-900/20 border border-green-800/40 flex items-center justify-center">
                <FiUser className="text-green-400" size={20} />
              </div>
              <div>
                <p className="text-white font-black text-base" style={{ fontFamily: "'Syne',sans-serif" }}>{artisan.name}</p>
                <p className="text-green-500 text-xs font-semibold">{artisan.role}</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 mb-5">
              <Input label="Your Name" placeholder="e.g. Emeka Johnson" value={name} onChange={e => setName(e.target.value)} />
              <div>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold mb-1.5">Message</p>
                <textarea value={msg} onChange={e => setMsg(e.target.value)} placeholder={`Hi, I'd like to hire you for...`} rows={4}
                  className="w-full bg-black/60 border border-gray-800 focus:border-green-500 rounded-lg px-3 py-2.5 text-white text-sm outline-none resize-none placeholder-gray-600 transition-all" />
              </div>
            </div>
            <div className="flex gap-2">
              <GreenBtn onClick={() => { if (name.trim() && msg.trim()) setSent(true); }} disabled={!name.trim() || !msg.trim()} className="flex-1">
                <FiMail size={14} /> Send Message
              </GreenBtn>
              {artisan.phone && (
                <button onClick={() => window.open(`https://wa.me/${artisan.phone.replace(/\D/g, "")}`, "_blank")}
                  className="flex-none bg-[#25d366] hover:bg-[#1fba58] text-white rounded-lg px-4 font-bold text-sm transition-all flex items-center gap-1.5">
                  <FiMessageSquare size={14} />
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-green-900/30 border border-green-700/50 flex items-center justify-center mx-auto mb-4">
              <FiCheck className="text-green-400" size={28} />
            </div>
            <h3 className="text-white font-black text-xl mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>Message Sent!</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{artisan.name} will get back to you soon.</p>
            <GreenBtn onClick={onClose} className="mt-5 mx-auto">Done</GreenBtn>
          </div>
        )}
      </div>
    </div>
  );
}
export default ContactModal;