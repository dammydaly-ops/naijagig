const ls = {
  get: (k, fb) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; } catch { return fb; } },
  set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { } },
};
export const getUsers = () => ls.get("ng_users", {});
export const saveUsers = u => ls.set("ng_users", u);
export const getSession = () => ls.get("ng_session", null);
export const saveSession = s => ls.set("ng_session", s);
export const clearSession = () => localStorage.removeItem("ng_session");