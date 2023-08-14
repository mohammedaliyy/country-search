import { BiDownArrow } from "react-icons/bi";
import "./SearchFilter.css";

function SearchFilter({
  handleFormSubmit,
  inputVal,
  onClick,
  animate,
  animateIcon,
}) {
  return (
    <div className="search">
      <form id="search__form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search for a country..."
          ref={inputVal}
        />
      </form>

      <div className="search__filter">
        <button onClick={animateIcon}>
          <span>Filter by Region</span>
          <BiDownArrow className={animate ? "animate--icon" : ""} />
        </button>
        <ul
          className="search__option"
          style={!animate ? { display: "none" } : null}
        >
          <li onClick={onClick}>Africa</li>
          <li onClick={onClick}>America</li>
          <li onClick={onClick}>Asia</li>
          <li onClick={onClick}>Europe</li>
          <li onClick={onClick}>Oceania</li>
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;
