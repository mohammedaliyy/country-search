import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import "./SearchFilter.css";

function SearchFilter() {
  const [inputVal, setInputVal] = useState("");
  const [animate, setAnimate] = useState(false);

  //   Handling input value
  const handleInputChange = (e) => {
    setInputVal(e.target.value);
    console.log(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputVal("");
  };

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
          value={inputVal}
          onChange={handleInputChange}
        />
        <h4>{inputVal}</h4>
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
