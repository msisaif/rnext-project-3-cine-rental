
import moon from "./../assets/icons/moon.svg";
import sun from "./../assets/icons/sun.svg";

export default function ThemeModeToggle({ isDarkMode, onChangeMode }) {
  return (
    <>
      <button
        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
        type="button"
        onClick={onChangeMode}
      >
        <img src={isDarkMode ? sun : moon} width="24" height="24" alt="sun" />
      </button>
    </>
  );
}
