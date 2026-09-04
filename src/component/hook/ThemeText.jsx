import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeText() {
  const theme = useContext(ThemeContext);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold">useContext</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default ThemeText;
