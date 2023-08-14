import { useState } from "react";
import "./Header.css";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";
function Header() {
  const [mode, setMode] = useState(true);
  const changeMode = () => {
    if (mode) {
      document.documentElement.style.setProperty(
        "--light-body-background",
        "hsl(207, 26%, 17%)"
      );
      document.documentElement.style.setProperty(
        "--light-mode-white",
        "hsl(209, 23%, 22%)"
      );
      document.documentElement.style.setProperty("--light-mode-text", "#fff");
    } else {
      document.documentElement.style.setProperty(
        "--light-body-background",
        "#f2f2f2"
      );
      document.documentElement.style.setProperty("--light-mode-white", "#fff");
      document.documentElement.style.setProperty(
        "--light-mode-text",
        "hsl(200, 15%, 8%)"
      );
    }
    setMode(!mode);
  };
  return (
    <div className="header">
      <div className="header__container">
        <h2>Where in the world?</h2>
        <span onClick={changeMode}>
          {mode ? (
            <HiOutlineMoon className="header__icon" />
          ) : (
            <HiMoon className="header__icon" />
          )}{" "}
          Dark Mode
        </span>
      </div>
    </div>
  );
}

export default Header;
