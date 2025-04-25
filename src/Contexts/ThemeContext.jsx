import React, { createContext, useEffect, useState } from "react";

export const themeContextProvider = createContext();

export const ThemeContext = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    JSON.parse(localStorage.getItem("darkTheme") || true)
  );

  const toggleTheme = () => {
    setDarkTheme(prev => !prev);
  };
  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
      JSON.stringify(localStorage.setItem("darkTheme", true))
    } else {
      document.body.classList.remove("dark");
      JSON.stringify(localStorage.setItem("darkTheme", false))
    }
  }, [darkTheme]);

  return (
    <themeContextProvider.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </themeContextProvider.Provider>
  );
};
