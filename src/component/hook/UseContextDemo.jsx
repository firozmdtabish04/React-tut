import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeText from "./ThemeText";

function UseContextDemo() {
  const [theme, setTheme] = useState("Dark");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="flex-col gap-4 min-h-screen justify-center bg-slate-200 flex items-center">
        <ThemeText />

        <button
          onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default UseContextDemo;
