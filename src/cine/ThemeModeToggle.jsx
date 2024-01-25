import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import moon from "./../assets/icons/moon.svg";
import sun from "./../assets/icons/sun.svg";

export default function ThemeModeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <>
      <button
        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
        type="button"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <img src={isDarkMode ? sun : moon} width="24" height="24" alt="sun" />
      </button>
    </>
  );
}
