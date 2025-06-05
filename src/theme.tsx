import { createContext, useState, useMemo } from "react";
import {
  createTheme,
  type PaletteMode,
  type Theme,
} from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          myColor: {
            primary: "#f6f9fc"
          },

          text: {
            primary: "#2B3445",
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          myColor: {
            primary: "#252b32"
          },

          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: grey[800],
          },

          text: {
            primary: "#fff",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, { toggleColorMode: () => void }] => {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem("mode") as PaletteMode) ?? "light"
  );

  const colorMode = {
    toggleColorMode: () => {
      const newMode = mode === "light" ? "dark" : "light";
      setMode(newMode);
      localStorage.setItem("mode", newMode);
    },
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
