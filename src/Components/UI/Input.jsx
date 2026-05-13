import { useState } from "react";

const Input = ({ value, onChange, placeholder, type }) => {
  const [focus, setFocus] = useState(false);

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      type={type}
      className={`p-2 rounded border ${
        focus ? "border-green-500" : "border-gray-700"
      } bg-black text-white`}
    />
  );
};

export default Input;