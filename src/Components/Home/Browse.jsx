import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ArtisanCard from "../Artisan/ArtisanCard";
import ProfileModal from "../Artisan/ProfileModal";
import ContactModal from "../ContactModal";
import GreenBtn from "../UI/GreenBtn";

const Browse = ({ search, setSearch, sort, setSort, groups, groupFilter, setGroupFilter, cat, setCat, visibleCats, filtered }) => {
  const [viewA, setViewA] = useState(null);
  const [contactA, setContactA] = useState(null);

  return (
    <div className="min-h-screen relative z-10">
      <div className="bg-gray-950 border-b border-gray-900 px-6 md:px-12 py-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2.5 items-center mb-4 flex-wrap">
            <div className="flex-1 min-w-48 relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={13} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by skill, name, location..."
                className="w-full bg-black border border-gray-800 focus:border-green-500 rounded-xl pl-9 pr-3 py-2.5 text-white text-xs outline-none transition-all placeholder-gray-600" />
            </div>
            <select value={sort} onChange={e => setSort(e.target.value)}
              className="bg-black border border-gray-800 rounded-xl px-4 py-2.5 text-white text-xs outline-none cursor-pointer">
              <option value="rating">Top Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
          <div className="flex gap-1.5 flex-wrap mb-3">
            {groups.map(g => (
              <button key={g} onClick={() => { setGroupFilter(g); setCat("all"); }}
                className={`px-3 py-1 rounded-full border text-[11px] font-bold transition-all ${groupFilter === g ? "bg-green-600 border-green-600 text-white" : "border-gray-800 text-gray-500 hover:border-gray-700"}`}>
                {g}
              </button>
            ))}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {visibleCats.map(c => {
              const IconC = c.Icon;
              return (
                <button key={c.id} onClick={() => setCat(c.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold transition-all ${cat === c.id ? "bg-green-600 border-green-600 text-white" : "border-gray-800 text-gray-500 hover:border-gray-700"}`}>
                  <IconC size={11} /> {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-7 pb-16">
        <p className="text-gray-500 text-sm mb-5">
          <span className="text-green-400 font-black text-lg" style={{ fontFamily: "'Syne',sans-serif" }}>{filtered.length}</span> professional{filtered.length !== 1 ? "s" : ""} found
        </p>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((a, i) => (
              <div key={a.id} style={{ animation: `fadeUp 0.4s ease ${i * 0.04}s both` }}>
                <ArtisanCard artisan={a} onView={setViewA} onContact={setContactA} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FiSearch className="mx-auto mb-4 text-gray-700" size={40} />
            <p className="text-white font-black text-xl mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>No results found</p>
            <p className="text-gray-600 mb-6 text-sm">Try different keywords or clear your filters.</p>
            <GreenBtn onClick={() => { setSearch(""); setCat("all"); setGroupFilter("All"); }}>Clear Filters</GreenBtn>
          </div>
        )}
      </div>

      {viewA && !contactA && <ProfileModal artisan={viewA} onClose={() => setViewA(null)} onContact={a => { setViewA(null); setContactA(a); }} />}
      {contactA && <ContactModal artisan={contactA} onClose={() => setContactA(null)} />}
    </div>
  );
};
export default Browse;