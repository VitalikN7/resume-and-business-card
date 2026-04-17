import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type ThemeType = "light" | "dark" | "system";

interface ThemeContextType {
  themeMode: ThemeType;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("themeMode") as ThemeType | null;
    return saved || "system";
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Определяем текущий режим (light или dark)
  useEffect(() => {
    const updateDarkMode = () => {
      let isDark = false;

      if (themeMode === "system") {
        isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      } else {
        isDark = themeMode === "dark";
      }

      setIsDarkMode(isDark);
    };

    updateDarkMode();

    // Слушаем изменение системной темы если включен режим system
    if (themeMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateDarkMode);
      return () => mediaQuery.removeEventListener("change", updateDarkMode);
    }
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => {
      let next: ThemeType;
      if (prev === "light") next = "dark";
      else if (prev === "dark") next = "system";
      else next = "light";

      localStorage.setItem("themeMode", next);
      return next;
    });
  };

  const updateThemeMode = (mode: ThemeType) => {
    setThemeMode(mode);
    localStorage.setItem("themeMode", mode);
  };

  return (
    <ThemeContext.Provider
      value={{ themeMode, isDarkMode, toggleTheme, setThemeMode: updateThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeContextProvider");
  }
  return context;
};
