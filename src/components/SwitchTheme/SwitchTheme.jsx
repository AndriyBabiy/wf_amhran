import { useState, useEffect } from "react";

function SwitchTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply the theme class to the body element
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <div className="switch-theme">
      <div className="switch-theme-control">
        {/* Input Checkbox */}
        <input
          className="switch-theme-checkbox visually-hidden"
          type="checkbox"
          name="theme toggler"
          id="theme-toggler"
          aria-label="switch theme"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        {/* Label for the Checkbox */}
        <label
          aria-hidden="true"
          className="switch-theme-track"
          htmlFor="theme-toggler"
        ></label>

        {/* Switch Ball */}
        <div className="switch-theme-ball"></div>

        {/* Moon Icon */}
        <svg
          className="switch-theme-icon"
          width="12"
          height="12"
          id="moon"
          aria-label="moon icon"
        >
          <use href="./img/icons.svg#icon-moon"></use>
        </svg>

        {/* Sun Icon */}
        <svg
          className="switch-theme-icon"
          width="12"
          height="12"
          id="sun"
          role="img"
          aria-label="sun icon"
        >
          <use href="./img/icons.svg#icon-sun"></use>
        </svg>
      </div>
    </div>
  );
}

export default SwitchTheme;
