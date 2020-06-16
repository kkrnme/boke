import {
  useTheme as EMOTION_USE_THEME,
  ThemeProvider as EMOTION_THEME_PROVIDER,
  ThemeProvider,
} from "emotion-theming";
import { createContext, useContext, useState } from "react";
import { ValueOf } from "ts-essentials";
import EmotionStyled, { CreateStyled } from "@emotion/styled";
import React from "react";
import * as LocalStorage from "../libs/local-storage";

export const themes = {
  cyan: {
    palette: {
      silver: "#d0d0d0",
    },
    colors: {
      primary: "#63b3ed",
      backround: "#1e1e21",
      foreground: "#d0d0d0",
      silver: "#d0d0d0",
    },
  },
  pink: {
    palette: {
      silver: "#d0d0d0",
    },
    colors: {
      primary: "#ed63b3",
      backround: "#1e1e21",
      foreground: "#d0d0d0",
      silver: "#d0d0d0",
    },
  },
  light: {
    palette: {
      silver: "#d0d0d0",
    },
    colors: {
      primary: "#63b3ed",
      backround: "#fafafa",
      foreground: "#595988",
      silver: "#d0d0d0",
    },
  },
} as const;

export type ThemeValues = ValueOf<typeof themes>;
type ThemeNames = keyof typeof themes;

export const ThemeContext = createContext<{
  changeTheme: (name: ThemeNames) => void;
  theme: ThemeValues;
}>({
  changeTheme: () => {
    console.log("noop");
  },
  theme: themes.cyan,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeStore: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeValues>(
    themes[(LocalStorage.get("theme") as ThemeNames) ?? "cyan"]
  );
  const setLocalStorage = LocalStorage.set<"theme", ThemeNames>("theme");
  return (
    <ThemeContext.Provider
      value={{
        changeTheme: (name: ThemeNames) => {
          setTheme(themes[name]);
          setLocalStorage(name);
        },
        theme,
      }}
    >
      <ThemeProvider theme={theme as any}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const styled = EmotionStyled as CreateStyled<ThemeValues>;
