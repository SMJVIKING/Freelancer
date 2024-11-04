import { useContext, useEffect } from "react";
import { createContext } from "react";
import useLocalStorageState from "../../hooks/useLocalStorageState";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const { isDarkMode, setIsDarkMode } = useLocalStorageState(
    "isDarkMode",
    false
  );

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  // نکته: ب جای این روش ک ما فقط از سی اس اس استفاده کردیم
  // میشه از خود تیلویند هم برای ایجاد دارک مود استفاده کرد

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}

// steps:
// 1.create context
// 2.call provider method of context
// 3.get values
// 4.create a custom hook to => we can use context eveywhere
