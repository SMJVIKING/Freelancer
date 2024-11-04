import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../features/Context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-7 h-7 text-primary-900" />
      ) : (
        <HiOutlineMoon className="w-7 h-7 text-primary-900" />
      )}
    </button>
  );
}
export default DarkModeToggle;
