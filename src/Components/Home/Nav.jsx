import { FiTool, FiSearch, FiLogOut, FiChevronRight } from "react-icons/fi";
import GhostBtn from "../UI/GhostBtn";
import GreenBtn from "../UI/GreenBtn";


const Nav = ({ session, setPage, setScreen, handleLogout }) => {
  return (
    <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-gray-900 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        <button onClick={() => setPage("home")} className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center ">
            <FiTool className="text-white text-sm" />
          </div>
          <span className="font-black text-white text-xl" style={{ fontFamily: "'Syne',sans-serif" }}>NaijaGig</span>
          <span className="hidden md:block text-[10px] text-gray-600 font-semibold uppercase tracking-widest ml-1">Nigeria's Talent Marketplace</span>
        </button>
        <div className="flex gap-2 items-center">
          {session && <p className="text-xs text-green-500 font-semibold hidden md:block">Hey, {session.username} 👋</p>}
          <GhostBtn onClick={() => setPage("browse")} className="hidden md:flex">
            <FiSearch size={13} /> Browse Talents
          </GhostBtn>
          {session
            ? <GreenBtn onClick={handleLogout} className="text-xs py-2 px-4"><FiLogOut size={12} /> Sign Out</GreenBtn>
            : <GreenBtn onClick={() => setScreen("auth")} className="text-xs py-2 px-4">Join Free <FiChevronRight size={13} /></GreenBtn>
          }
        </div>
      </div>
    </nav>
  );
};
export default Nav;