const Categories = ({ groups, visibleCats, artisans, groupFilter, setGroupFilter, setCat, setPage }) => {
  return (
    <section className="bg-gray-950/60 px-6 md:px-12 py-20 border-t border-b border-gray-900 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-12">
          <p className="text-green-500 text-[10px] font-bold uppercase tracking-[4px] mb-3">✦ Every Skill ✦</p>
          <h2 className="text-white font-black" style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(24px,3.5vw,38px)" }}>
            From <span className="text-green-400">code to craft.</span>
          </h2>
        </div>
        <div className="flex gap-2 justify-center flex-wrap mb-8">
          {groups.map(g => (
            <button key={g} onClick={() => setGroupFilter(g)}
              className={`px-4 py-1.5 rounded-full border text-xs font-bold transition-all ${groupFilter === g ? "bg-green-600 border-green-600 text-white" : "border-gray-800 text-gray-500 hover:border-gray-700"}`}>
              {g}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {visibleCats.filter(c => c.id !== "all").map((c) => {
            const count = artisans.filter(a => a.category === c.id).length;
            const IconC = c.Icon;
            return (
              <button key={c.id}
                className="reveal bg-gray-950 border border-gray-900 hover:border-green-800/60 hover:shadow-[0_4px_20px_rgba(22,163,74,0.1)] rounded-xl p-5 cursor-pointer text-center transition-all hover:-translate-y-0.5"
                onClick={() => { setCat(c.id); setPage("browse"); }}>
                <IconC className="text-green-500 mx-auto mb-3" size={28} />
                <p className="text-white text-sm font-bold mb-1">{c.label}</p>
                <p className="text-green-600 text-[11px]">{count} pro{count !== 1 ? "s" : ""}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Categories;