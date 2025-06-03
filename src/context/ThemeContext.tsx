import { useState, createContext, useContext } from "react";

const ThemeContext = createContext({} as any);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children } : any) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ setDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};