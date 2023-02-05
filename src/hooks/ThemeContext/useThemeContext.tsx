import { createContext, useContext, useEffect, useState } from "react";
import { ThemeContextProps, ThemeContextValueTypes } from "./models";

const ThemeContext = createContext<ThemeContextValueTypes>(
  {} as ThemeContextValueTypes
);

export function ThemeProvider({ children }: ThemeContextProps) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleIsDarkMode = (): void => {
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const isDark: boolean = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(isDark);
  }, [isDarkMode]);

  const provide = { toggleIsDarkMode, isDarkMode };

  return (
    <ThemeContext.Provider value={provide}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => {
  const themeProviderContext = useContext(ThemeContext);
  return themeProviderContext;
};
