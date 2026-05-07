// 👻 Ghost Button
const GhostBtn = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`border border-gray-800 hover:border-green-600 text-gray-400 hover:text-green-400 font-semibold text-sm rounded-lg px-5 py-2.5 transition-all flex items-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};
export default GhostBtn;