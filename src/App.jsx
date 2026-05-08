import { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Nav from './Components/Home/Nav';
import Hero from './Components/Home/Hero';
import Categories from './Components/Home/Categories';
import Testimonials from './Components/Home/Testimonials';
import HowWorks from './Components/Home/HowItWorks';
import Footer from './Components/Home/Footer';
import Browse from './Components/Home/Browse';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import ArtisanCard from './Components/Artisan/ArtisanCard';
import ProfileModal from './Components/Artisan/ProfileModal';
import ContactModal from './Components/ContactModal';
import GhostBtn from './Components/UI/GhostBtn';
import { getSession, clearSession, getUsers } from "./Components/Storage";
import { CATS, SEED_ARTISANS, TESTIMONIALS } from "./Data/Data";
import Cta from './Components/Home/Cta';

const App = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("home");
  const [groupFilter, setGroupFilter] = useState("All");
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("rating");
  const [session, setSession] = useState(() => getSession());
  const [screen, setScreen] = useState(() => { const s = getSession(); return s ? "app" : "landing"; });
  const [viewA, setViewA] = useState(null);
  const [contactA, setContactA] = useState(null);

  const allArtisans = () => {
    const users = getUsers();
    const userArtisans = Object.values(users).filter(u => u.type === "artisan" && u.bio).map(u => ({
      id: u.username, name: u.username, role: u.role || "Artisan", category: u.category || "dev",
      location: u.location || "Nigeria", bio: u.bio, rating: 4.5, reviews: 0, price: u.price || "Contact for price",
      tags: u.tags || [], verified: false, phone: u.phone || "", works: u.works || [], testimonials: [],
    }));
    return [...SEED_ARTISANS, ...userArtisans];
  };

  const artisans = allArtisans();
  const groups = ["All", ...Array.from(new Set(CATS.filter(c => c.group).map(c => c.group)))];
  const visibleCats = groupFilter === "All" ? CATS : CATS.filter(c => c.id === "all" || c.group === groupFilter);
  const filtered = artisans
    .filter(a => (cat === "all" || a.category === cat) && (search === "" || a.name.toLowerCase().includes(search.toLowerCase()) || a.role.toLowerCase().includes(search.toLowerCase()) || a.location.toLowerCase().includes(search.toLowerCase()) || (a.tags || []).some(t => t.toLowerCase().includes(search.toLowerCase()))))
    .sort((a, b) => sort === "rating" ? b.rating - a.rating : b.reviews - a.reviews);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("vis"); }), { threshold: 0.1 });
    document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [page, screen, groupFilter]);

  const handleLogin = s => { setSession(s); setScreen(s.type === "artisan" ? "app" : "main"); };
  const handleLogout = () => { clearSession(); setSession(null); setScreen("landing"); setPage("home"); };

  if (screen === "app" && session?.type === "artisan") return (
    <Dashboard session={session} onLogout={handleLogout} />
  );

  if (screen === "auth") return (
    <div className="bg-black min-h-screen">
      <div className="fixed w-[700px] h-[700px] rounded-full bg-green-700/5 pointer-events-none -top-72 -left-48" />
      <Auth onLogin={handleLogin} onBack={() => setScreen("landing")} />
    </div>
  );

  return (
    <div className="bg-gray-950 min-h-screen text-gray-200">
      <div className="fixed w-[700px] h-[700px] rounded-full bg-green-700/5 pointer-events-none -top-72 -left-48" />
      <div className="fixed w-[500px] h-[500px] rounded-full bg-green-700/3 pointer-events-none -bottom-48 -right-24" />

      <Nav session={session} setPage={setPage} setScreen={setScreen} handleLogout={handleLogout} />

      {page === "home" && (
        <div className="relative z-10">
          <Hero search={search} setSearch={setSearch} setPage={setPage} />

          {/* Featured */}
          <section className="px-6 md:px-12 py-20 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-9">
                <div>
                  <p className="text-green-500 text-[10px] font-bold uppercase tracking-[4px] mb-2">✦ Top Picks ✦</p>
                  <h2 className="text-white font-black text-3xl md:text-4xl" style={{ fontFamily: "'Syne',sans-serif" }}>
                    Featured <span className="text-green-400">Professionals</span>
                  </h2>
                </div>
                <GhostBtn onClick={() => setPage("browse")} className="hidden md:flex">
                  See All Talents <FiChevronRight size={14} />
                </GhostBtn>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {artisans.filter(a => a.verified).slice(0, 6).map(a => (
                  <ArtisanCard key={a.id} artisan={a} onView={setViewA} onContact={setContactA} />
                ))}
              </div>
            </div>
          </section>

          <Categories
            groups={groups}
            visibleCats={visibleCats}
            artisans={artisans}
            groupFilter={groupFilter}
            setGroupFilter={setGroupFilter}
            setCat={setCat}
            setPage={setPage}
          />
          <Testimonials testimonials={TESTIMONIALS} />
          <HowWorks />
          <Cta setScreen={setScreen} />
          <Footer />
        </div>
      )}

      {page === "browse" && (
        <Browse
          search={search} setSearch={setSearch}
          sort={sort} setSort={setSort}
          groups={groups} groupFilter={groupFilter} setGroupFilter={setGroupFilter}
          cat={cat} setCat={setCat}
          visibleCats={visibleCats}
          filtered={filtered}
        />
      )}

      {viewA && !contactA && <ProfileModal artisan={viewA} onClose={() => setViewA(null)} onContact={a => { setViewA(null); setContactA(a); }} />}
      {contactA && <ContactModal artisan={contactA} onClose={() => setContactA(null)} />}
    </div>
  );
};

export default App;