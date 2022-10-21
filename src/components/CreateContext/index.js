import React, { createContext, useState } from "react";
import Page from "./page";

// Context lets components pass information deep down without explicitly passing props.

/**
 * createContext
 *
 * Creates a context that components can provide or read.
 *
 * Components can read context by passing it to useContext():
 */
export const ThemeContext = createContext("light");
export const AuthContext = createContext(null);

export default function SampleContext() {
  const [theme, setTheme] = useState("light");
  const [currentUser] = useState({ name: "Arif" });

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={theme}>
      <AuthContext.Provider value={currentUser}>
        <Page />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
