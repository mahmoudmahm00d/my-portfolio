"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ theme: "system", setTheme: () => null });

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme-preference",
  attribute = "data-theme",
  enableSystem = false,
}) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue("--initial-color-mode");

    const persistedPreference = localStorage.getItem(storageKey);
    const hasPersistedPreference = typeof persistedPreference === "string";

    const preference = hasPersistedPreference ? persistedPreference : initialColorValue;
    
    if (preference === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    if (hasPersistedPreference) {
      setTheme(persistedPreference);
    } else if (enableSystem) {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemPreference);
    }
  }, [storageKey, enableSystem]);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem(storageKey, "dark");
    } else if (theme === "light") {
      root.classList.remove("dark");
      localStorage.setItem(storageKey, "light");
    } else if (theme === "system") {
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      if (systemPreference === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.removeItem(storageKey);
    }
  }, [theme, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};