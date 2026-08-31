import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext, themeModes } from "./ThemeContext";
import type { ThemeMode } from "./ThemeContext";

const isThemeMode = (value: string | null): value is ThemeMode => {
  return themeModes.includes(value as ThemeMode);
};

const getNextThemeMode = (themeMode: ThemeMode): ThemeMode => {
  if (themeMode === "light") return "dark";
  if (themeMode === "dark") return "system";
  return "light";
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedThemeMode = localStorage.getItem("themeMode");
    return isThemeMode(savedThemeMode) ? savedThemeMode : "system";
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      const isDark =
        themeMode === "system"
          ? window.matchMedia("(prefers-color-scheme: dark)").matches
          : themeMode === "dark";

      setIsDarkMode(isDark);
    };

    updateDarkMode();

    if (themeMode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateDarkMode);
      return () => mediaQuery.removeEventListener("change", updateDarkMode);
    }
  }, [themeMode]);

  const toggleTheme = () => {
    const nextThemeMode = getNextThemeMode(themeMode);
    setThemeMode(nextThemeMode);
    localStorage.setItem("themeMode", nextThemeMode);
  };

  const updateThemeMode = (mode: ThemeMode) => {
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
