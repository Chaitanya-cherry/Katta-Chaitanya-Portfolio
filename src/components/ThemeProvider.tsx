
import React, { createContext, useContext } from "react";

interface ThemeContextType {
  theme: "dark";
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark"
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Always force dark mode
  React.useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      <div className="dark">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
