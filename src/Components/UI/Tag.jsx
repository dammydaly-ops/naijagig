const Tag = ({ label }) => {
  return (
    <span className="bg-green-900/30 border border-green-700/30 text-green-400 rounded-full px-2 py-0.5 text-[10px] font-bold">
      {label}
    </span>
  );
};
export default Tag;