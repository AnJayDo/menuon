"use client";
import { useTheme } from "next-themes";
import { BsMoonStars, BsMoonStarsFill, BsSunFill, BsSun } from "react-icons/bs";

export default function DarkModeToggle(props: any) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className={
        props.className
          ? `${props.className} dark-mode-toggle`
          : `dark-mode-toggle`
      }
    >
      <BsMoonStarsFill color="#ffff95" size={12} className="moon-star" />
      <BsMoonStars color="#ffff00" size={12} className="moon-star" />
      <BsSunFill color="#ff9300" size={16} className="sun" />
      <BsSun color="#ffd462" size={16} className="sun" />
      <div className="color-shade-1"></div>
      <div className="color-shade-2"></div>
      <div className="color-shade-3"></div>
      <div className="toggle-core"></div>
    </div>
  );
}
