import "./Header.css";
import { HiOutlineMoon } from "react-icons/hi";
function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <h2>Where in the world?</h2>
        <span>
          <HiOutlineMoon className="header__icon" /> Dark Mode
        </span>
      </div>
    </div>
  );
}

export default Header;
