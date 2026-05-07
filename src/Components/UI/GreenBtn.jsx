import { useState } from "react";


// 🟢 Green Button
const GreenBtn = ({
  children,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-lg px-5 py-2.5 transition-all active:scale-95 flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default GreenBtn;

