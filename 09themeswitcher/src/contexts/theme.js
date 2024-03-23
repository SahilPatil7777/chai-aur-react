import { createContext, useContext } from "react";
//  creating a ThemeContext
// in this ThemeContext ,when context is initialized it has defualt value.

export const ThemeContext = createContext({
  themeMode: "light",
  // function or method
  darkTheme: () => {},
  lightTheme: () => {},
});

// creating ThemeContextProvider method
export const ThemeProvider = ThemeContext.Provider;

// making custom hook
// this we do to not import useContext and ThemeContext instead import only useTheme()
export default function useTheme() {
  return useContext(ThemeContext);
}
