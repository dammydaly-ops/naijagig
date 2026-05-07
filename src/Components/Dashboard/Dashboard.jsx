import { useState } from "react";
import { FiGrid, FiPackage, FiUser, FiAward, FiDollarSign, FiCheckCircle, FiAlertCircle, FiPlus, FiTrash2, FiEdit3, FiMenu, FiLogOut, FiTool, FiCheck } from "react-icons/fi";
import Card from "../UI/Card";
import Input from "../UI/Input";
import GreenBtn from "../UI/GreenBtn";
import { getUsers, saveUsers } from "../Storage";
import { CATS } from "../../Data/Data";

const Dashboard = ({ session, onLogout }) => {
  const [tab, setTab] = useState("overview");
  const users = getUsers();
  const user = users[session.username.toLowerCase()] || { works: [], role: "", phone: "", bio: "", location: "", tags: [], price: "" };
  const [works, setWorks] = useState(user.works || []);
  const [profile, setProfile] = useState({ bio: user.bio || "", location: user.location || "", phone: user.phone || "", role: user.role || "", price: user.price || "", tags: (user.tags || []).join(", "), category: user.category || "" });
  const [newWork, setNewWork] = useState({ title: "", desc: "", year: new Date().getFullYear().toString() });
  const [saved, setSaved] = useState(false);
  const [sideOpen, setSideOpen] = useState(true);

  const saveProfile = () => {
    const updated = { ...users[session.username.toLowerCase()], ...profile, tags: profile.tags.split(",").map(t => t.trim()).filter(Boolean), works };
    saveUsers({ ...users, [session.username.toLowerCase()]: updated });
    setSaved(true); setTimeout(() => setSaved(false), 2000);
  };
  const addWork = () => {
    if (!newWork.title.trim()) return;
    const updated = [...works, { ...newWork, id: Date.now() }];
    setWorks(updated);
    saveUsers({ ...users, [session.username.toLowerCase()]: { ...users[session.username.toLowerCase()], works: updated } });
    setNewWork({ title: "", desc: "", year: new Date().getFullYear().toString() });
  };
  const removeWork = (id) => {
    const updated = works.filter(w => w.id !== id);
    setWorks(updated);
    saveUsers({ ...users, [session.username.toLowerCase()]: { ...users[session.username.toLowerCase()], works: updated } });
  };

  const TABS = [
    { id: "overview", label: "Overview", Icon: FiGrid },
    { id: "portfolio", label: "My Works", Icon: FiPackage },
    { id: "profile", label: "Profile", Icon: FiUser },
  ];

  const completionItems = [
    ["Role/Title", !!profile.role], ["Bio", !!profile.bio], ["Location", !!profile.location],
    ["Phone", !!profile.phone], ["Pricing", !!profile.price], ["Works Added", works.length > 0], ["Skills/Tags", profile.tags.length > 0]
  ];
  const completionPct = Math.round((completionItems.filter(([, d]) => d).length / completionItems.length) * 100);

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <aside className={`${sideOpen ? "w-56" : "w-16"} fixed top-0 left-0 bottom-0 bg-gray-950 border-r border-gray-900 flex flex-col z-50 transition-all duration-200`}>
        <div className="p-4 border-b border-gray-900 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center shrink-0">
            <FiTool className="text-white text-sm" />
          </div>
          {sideOpen && <span className="font-black text-white text-base" style={{ fontFamily: "'Syne',sans-serif" }}>NijaGig</span>}
        </div>

        {sideOpen && (
          <div className="p-4 border-b border-gray-900">
            <div className="w-10 h-10 rounded-full bg-green-900/30 border border-green-800/40 flex items-center justify-center mb-2">
              <FiUser className="text-green-400 text-base" />
            </div>
            <p className="text-white text-sm font-bold truncate">{session.username}</p>
            <p className="text-green-500 text-[10px] font-semibold mt-0.5">Artisan Account</p>
          </div>
        )}

        <nav className="flex-1 p-2 flex flex-col gap-1">
          {TABS.map(({ id, label, Icon }) => {
            const a = tab === id;
            return (
              <button key={id} onClick={() => setTab(id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border-l-2 text-left w-full font-semibold text-xs transition-all ${a ? "border-green-500 bg-green-900/20 text-green-400" : "border-transparent text-gray-500 hover:text-gray-300"}`}>
                <Icon size={15} className="shrink-0" />{sideOpen && label}
              </button>
            );
          })}
        </nav>

        <div className="p-3 border-t border-gray-900">
          <button onClick={onLogout}
            className="flex items-center gap-2 w-full border border-gray-800 rounded-lg px-3 py-2 text-gray-500 hover:text-red-400 hover:border-red-900 text-xs font-semibold transition-all">
            <FiLogOut size={13} className="shrink-0" />{sideOpen && "Sign Out"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className={`${sideOpen ? "ml-56" : "ml-16"} flex-1 p-7 pb-16 transition-all`}>
        <div className="max-w-3xl">
          <button onClick={() => setSideOpen(!sideOpen)} className="mb-6 p-2 rounded-lg border border-gray-800 text-gray-500 hover:text-white transition-colors">
            <FiMenu size={16} />
          </button>

          {/* OVERVIEW */}
          {tab === "overview" && (
            <div className="animate-[fadeUp_0.4s_ease]">
              <h1 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "'Syne',sans-serif" }}>Welcome back, {session.username} 👋</h1>
              <p className="text-gray-500 text-sm mb-7">Manage your profile, add your works, and get discovered by clients across Nigeria.</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[[works.length, "Works Added", FiPackage, "text-green-400"], [profile.tags.split(",").filter(Boolean).length, "Skills Listed", FiAward, "text-blue-400"], [profile.price ? "1" : "0", "Pricing Set", FiDollarSign, "text-amber-400"]].map(([v, l, Icon, c]) => (
                  <Card key={l} className="text-center py-5">
                    <Icon className={`${c} mx-auto mb-2`} size={22} />
                    <p className={`text-3xl font-black ${c} mb-1`} style={{ fontFamily: "'Syne',sans-serif" }}>{v}</p>
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest">{l}</p>
                  </Card>
                ))}
              </div>

              <Card glow>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-green-500 text-xs uppercase tracking-widest font-bold">Profile Completion</p>
                  <span className="text-green-400 font-black text-sm">{completionPct}%</span>
                </div>
                <div className="h-1.5 bg-gray-900 rounded-full mb-4 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-700 to-green-400 rounded-full transition-all" style={{ width: `${completionPct}%` }} />
                </div>
                {completionItems.map(([l, done]) => (
                  <div key={l} className="flex items-center justify-between py-2 border-b border-gray-900/60 last:border-0">
                    <span className="text-gray-400 text-xs">{l}</span>
                    <span className={`text-xs font-bold flex items-center gap-1 ${done ? "text-green-400" : "text-red-500"}`}>
                      {done ? <FiCheckCircle size={11} /> : <FiAlertCircle size={11} />} {done ? "Done" : "Missing"}
                    </span>
                  </div>
                ))}
              </Card>
            </div>
          )}

          {/* PORTFOLIO */}
          {tab === "portfolio" && (
            <div className="animate-[fadeUp_0.4s_ease]">
              <h1 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "'Syne',sans-serif" }}>My Works</h1>
              <p className="text-gray-500 text-sm mb-6">Add projects, jobs, and work samples for clients to see.</p>

              <Card className="mb-5">
                <p className="text-green-500 text-xs uppercase tracking-widest font-bold mb-4">Add New Work</p>
                <div className="flex flex-col gap-3">
                  <Input label="Project Title" placeholder="e.g. E-commerce Website, Wedding Catering" value={newWork.title} onChange={e => setNewWork(p => ({ ...p, title: e.target.value }))} />
                  <div>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold mb-1.5">Description</p>
                    <textarea value={newWork.desc} onChange={e => setNewWork(p => ({ ...p, desc: e.target.value }))} placeholder="Describe what you did, for who, and the result..." rows={3}
                      className="w-full bg-black/60 border border-gray-800 focus:border-green-500 rounded-lg px-3 py-2.5 text-white text-sm outline-none resize-none placeholder-gray-600 transition-all" />
                  </div>
                  <Input label="Year" placeholder="2024" value={newWork.year} onChange={e => setNewWork(p => ({ ...p, year: e.target.value }))} />
                  <GreenBtn onClick={addWork} disabled={!newWork.title.trim()} className="self-start">
                    <FiPlus size={14} /> Add Work
                  </GreenBtn>
                </div>
              </Card>

              {works.length === 0 ? (
                <div className="text-center py-12 text-gray-600">
                  <FiPackage size={36} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No works yet. Add your first project above!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {works.map((w, i) => (
                    <Card key={w.id || i} className="py-4 px-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-bold text-white mb-1">{w.title}</p>
                          {w.desc && <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>}
                          <p className="text-[10px] text-green-500 font-bold mt-2">{w.year}</p>
                        </div>
                        <button onClick={() => removeWork(w.id || i)} className="text-gray-600 hover:text-red-400 transition-colors ml-3 mt-0.5">
                          <FiTrash2 size={13} />
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* PROFILE */}
          {tab === "profile" && (
            <div className="animate-[fadeUp_0.4s_ease]">
              <h1 className="text-2xl font-black text-white mb-1" style={{ fontFamily: "'Syne',sans-serif" }}>My Profile</h1>
              <p className="text-gray-500 text-sm mb-6">This is what clients see when they find you on NijaGig.</p>
              <Card>
                <div className="flex flex-col gap-4">
                  <Input label="Job Title / Role" placeholder="e.g. Full Stack Developer, Master Tailor" value={profile.role} onChange={e => setProfile(p => ({ ...p, role: e.target.value }))} />
                  <div>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold mb-1.5">Bio</p>
                    <textarea value={profile.bio} onChange={e => setProfile(p => ({ ...p, bio: e.target.value }))} placeholder="Tell clients about your experience and what makes you great..." rows={4}
                      className="w-full bg-black/60 border border-gray-800 focus:border-green-500 rounded-lg px-3 py-2.5 text-white text-sm outline-none resize-none placeholder-gray-600 transition-all" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input label="Location" placeholder="e.g. Lagos, Nigeria" value={profile.location} onChange={e => setProfile(p => ({ ...p, location: e.target.value }))} />
                    <Input label="Phone / WhatsApp" placeholder="+234 800 000 0000" value={profile.phone} onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))} />
                  </div>
                  <Input label="Starting Price" placeholder="e.g. ₦10,000/project or ₦5,000/hour" value={profile.price} onChange={e => setProfile(p => ({ ...p, price: e.target.value }))} />
                  <Input label="Skills / Tags (comma separated)" placeholder="e.g. React, Node.js, MongoDB" value={profile.tags} onChange={e => setProfile(p => ({ ...p, tags: e.target.value }))} />
                  <div>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest font-semibold mb-1.5">Category</p>
                    <select value={profile.category} onChange={e => setProfile(p => ({ ...p, category: e.target.value }))}
                      className="w-full bg-black/60 border border-gray-800 focus:border-green-500 rounded-lg px-3 py-2.5 text-white text-sm outline-none transition-all">
                      <option value="">Select a category</option>
                      {CATS.filter(c => c.id !== "all").map(c => (
                        <option key={c.id} value={c.id}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                  <GreenBtn onClick={saveProfile} className="self-start">
                    {saved ? <><FiCheck size={14} /> Saved!</> : <><FiEdit3 size={14} /> Save Profile</>}
                  </GreenBtn>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;