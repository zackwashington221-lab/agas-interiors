import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Hardcoded to clean default light mode as requested by user
  const [theme] = useState<Theme>('light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
    try {
      localStorage.setItem('agas_theme', 'light');
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = () => {
    // Theme toggle hidden/disabled for now
  };

  const setTheme = () => {
    // Theme setter hidden/disabled for now
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
