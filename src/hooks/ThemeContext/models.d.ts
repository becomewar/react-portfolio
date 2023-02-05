export interface ThemeContextValueTypes {
  isDarkMode: boolean;
  toggleIsDarkMode: () => void;
}

export interface ThemeContextProps {
  children: React.ReactNode;
}
