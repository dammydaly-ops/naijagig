// 🧱 Card
 const Card = ({ children, className = "", glow = false }) => {
  return (
    <div
      className={`bg-gray-950 border rounded-2xl p-5 ${
        glow
          ? "border-green-900/50 shadow-[0_0_24px_rgba(22,163,74,0.08)]"
          : "border-gray-900"
      } ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;


