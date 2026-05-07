import { FiStar } from "react-icons/fi";
const StarRow = ({ rating, size = "text-xs" }) => {
  return (
    <span className="flex gap-0.5 items-center">
      {[1, 2, 3, 4, 5].map((s) => (
        <FiStar
          key={s}
          className={`${size} ${
            s <= Math.round(rating)
              ? "text-amber-400 fill-amber-400"
              : "text-gray-700"
          }`}
        />
      ))}
    </span>
  );
};
export default StarRow;