import { useState, useEffect } from "react";
import "./DarkMode.css";
import { ReactComponent as MoonIcon } from "./assets/svg/moon.svg";
import { ReactComponent as SunIcon } from "./assets/svg/sun.svg";

export const DarkMode = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const updateTheme = (isDarkEnabled) => {
    const styles = getComputedStyle(document.body);
    const black = styles.getPropertyValue("--black");
    const white = styles.getPropertyValue("--white");
    const docEl = document.documentElement;
    if (isDarkEnabled) {
      docEl.style.setProperty("--background", black);
      docEl.style.setProperty("--foreground", white);
    } else {
      docEl.style.setProperty("--background", white);
      docEl.style.setProperty("--foreground", black);
    }
  };
  useEffect(() => {
    updateTheme(isEnabled);
  }, [isEnabled]);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };
  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
        <span className="hidden">
          {isEnabled ? "Enable Light Mode" : "Disable Dark Mode"}
        </span>
        <div className="icons">
          <SunIcon />
          <MoonIcon />
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          readOnly
          checked={isEnabled}
          onClick={toggleState}
        />
      </div>
    </label>
  );
};
