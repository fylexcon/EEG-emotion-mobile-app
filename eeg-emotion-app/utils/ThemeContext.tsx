import React, { createContext, useContext, useState } from 'react';
import { defaultTheme, emotionThemes } from './themes';

type EmotionType = 'mutlu' | 'üzgün' | 'kızgın' | 'stresli' | 'nötr';

interface Theme {
  background: string;
  text: string;
  button: string;
  buttonText: string;
}

interface ThemeContextProps {
  theme: Theme;
  setEmotion: (emotion: EmotionType) => void;
}

// 1. ✅ Context başlangıcı undefined olacak şekilde tanımlandı
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// 2. ✅ ThemeProvider bileşeni
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const setEmotion = (emotion: EmotionType) => {
    const selected = emotionThemes[emotion] || defaultTheme;
    setTheme(selected);
  };

  return (
    <ThemeContext.Provider value={{ theme, setEmotion }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. ✅ Context'i güvenli şekilde kullanan hook
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
