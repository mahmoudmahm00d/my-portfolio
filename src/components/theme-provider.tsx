"use client";
import { createContext, useContext, useEffect, useState } from "react";

// Define proper types for our context
interface ThemeContextType {
    theme: string;
    setTheme: (value: string) => void;
}

// Initialize context with proper types
const ThemeContext = createContext<ThemeContextType>({
    theme: "system",
    setTheme: () => null // Default implementation
});

export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "theme-preference",
    enableSystem = false,
}: {
    children: React.ReactNode,
    defaultTheme: string,
    storageKey: string,
    enableSystem: boolean, // Changed from Boolean to boolean
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
        
        switch(theme) {
            case "dark":
                root.classList.add("dark");
                localStorage.setItem(storageKey, "dark");
                break;
                
            case "light":
                root.classList.remove("dark");
                localStorage.setItem(storageKey, "light");
                break;
                
            case "system":
                const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                if (systemPreference === "dark") {
                    root.classList.add("dark");
                } else {
                    root.classList.remove("dark");
                }
                localStorage.removeItem(storageKey);
                break;
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