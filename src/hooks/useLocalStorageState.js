import { useEffect, useState } from "react";

export default function useLocalStorageState( key ,initialState) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // DarkMode=>رو توی لوکال استوریج سیو کردیم
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value,key]);

  return [value, setValue];
}
