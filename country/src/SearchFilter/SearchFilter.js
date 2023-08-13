import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import "./SearchFilter.css";

function SearchFilter({ handleFormSubmit, inputVal }) {
  const [animate, setAnimate] = useState(false);

  //   Toggling Icon

  const animateIcon = () => {
    setAnimate(!animate);
  };

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
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;
