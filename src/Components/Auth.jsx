import { useState } from "react"
import { FiArrowLeft, FiTool, FiSearch, FiAlertCircle, FiChevronRight } from "react-icons/fi";
import Card from "./UI/Card";
import Input from "./UI/Input";
import GreenBtn from "./UI/GreenBtn";  // fix casing too!
import { getUsers, saveUsers, saveSession } from "./Storage";



const Auth = ({ onLogin, onBack }) => {
  const [mode, setMode] = useState("login");
  const [utype, setUtype] = useState("customer");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setErr("");
    if (!username.trim() || !pass.trim()) return setErr("Fill all required fields.");
    if (pass.length < 6) return setErr("Password must be 6+ characters.");
    if (mode === "register" && !email.trim()) return setErr("Email is required.");
    setLoading(true);
    setTimeout(() => {
      const users = getUsers();
      if (mode === "register") {
        if (users[username.toLowerCase()]) return (setErr("Username taken."), setLoading(false));
        const newUser = { username: username.trim(), email, password: pass, type: utype, role: utype === "artisan" ? role : "", createdAt: new Date().toISOString(), works: [], phone: "", bio: "", location: "", tags: [], price: "" };
        users[username.toLowerCase()] = newUser;
        saveUsers(users); saveSession({ username: username.trim(), type: utype }); onLogin({ username: username.trim(), type: utype });
      } else {
        const u = users[username.toLowerCase()];
        if (!u) return (setErr("Username not found."), setLoading(false));
        if (u.password !== pass) return (setErr("Wrong password."), setLoading(false));
        saveSession({ username: u.username, type: u.type }); onLogin({ username: u.username, type: u.type });
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative z-10 ">
      <button onClick={onBack} className="fixed top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors">
        <FiArrowLeft /> Back
      </button>

      <div className="w-full max-w-md animate-[fadeUp_0.5s_ease]">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center">
              <FiTool className="text-white text-lg" />
            </div>
            <span className="font-black text-2xl text-white" style={{ fontFamily: "'Syne',sans-serif" }}>NijaGig</span>
          </div>
          <p className="text-gray-500 text-sm">Nigeria's #1 Talent Marketplace</p>
        </div>

        <Card glow>
          {/* Toggle */}
          <div className="flex bg-black rounded-xl p-1 mb-6">
            {["login", "register"].map(m => (
              <button key={m} onClick={() => { setMode(m); setErr(""); }}
                className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${mode === m ? "bg-green-600 text-white" : "text-gray-500 hover:text-gray-300"}`}>
                {m === "login" ? "Sign In" : "Register"}
              </button>
            ))}
          </div>

          {mode === "register" && (
            <div className="flex gap-2 mb-5">
              {[["customer", "I need talent", FiSearch], ["artisan", "I offer services", FiTool]].map(([v, l, Icon]) => (
                <button key={v} onClick={() => setUtype(v)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold transition-all ${utype === v ? "border-green-500 bg-green-900/20 text-green-400" : "border-gray-800 text-gray-500 hover:border-gray-700"}`}>
                  <Icon size={13} />{l}
                </button>
              ))}
            </div>
          )}

          <div className="flex flex-col gap-3">
            <Input label="Username" placeholder="e.g. emeka_codes" value={username} onChange={e => setUsername(e.target.value)} />
            {mode === "register" && <Input label="Email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} type="email" />}
            {mode === "register" && utype === "artisan" && <Input label="Your Role / Job Title" placeholder="e.g. Full Stack Developer" value={role} onChange={e => setRole(e.target.value)} />}
            <Input label="Password" placeholder="••••••••" value={pass} onChange={e => setPass(e.target.value)} type="password" />
            {err && (
              <div className="flex items-center gap-2 bg-red-950/50 border border-red-900/50 rounded-lg px-3 py-2">
                <FiAlertCircle className="text-red-400 shrink-0" size={14} />
                <p className="text-red-400 text-xs">{err}</p>
              </div>
            )}
            <GreenBtn onClick={submit} disabled={loading} className="w-full py-3 text-sm mt-1">
              {loading ? "..." : mode === "login" ? "Welcome Back" : "Create Account"}
              {!loading && <FiChevronRight size={15} />}
            </GreenBtn>
          </div>
        </Card>
        <p className="text-center text-xs text-gray-700 mt-4">Data stored privately on this device.</p>
      </div>
    </div>
  );
}
export default Auth;