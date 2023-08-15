import { useRef, useState, useEffect } from "react";
import "./Main.css";
import Countries from "../Countries/Countries";
import SearchFilter from "../SearchFilter/SearchFilter";
import IndividualCountry from "../IndividualCountry/IndividualCountry";
function Main() {
  const inputRef = useRef(null);
  const [fetchedData, setFetchedData] = useState([]);
  const [allFetchedData, setAllFetchedData] = useState([]);
  const [submit, setSubmit] = useState();
  const [inputValue, setInputValue] = useState();
  const [region, setRegion] = useState();
  const [invoke, setInvoke] = useState();
  const [animate, setAnimate] = useState(false);
  const [indiviually, setIndiviually] = useState(false);
  const [countryName, setCountryName] = useState("");

  // Fetching each country
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${inputValue}`
        );
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }

    // Invoking useEffect only after submitting form
    if (submit) {
      fetchData();
      setSubmit(false);
    }
  }, [submit, fetchedData, inputValue]);

  //   Handling input value

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputRef.current.value);
    setSubmit(true);
    inputRef.current.value = "";
  };

  // Fetching all country
  useEffect(() => {
    async function fetchAllData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setAllFetchedData(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }

    fetchAllData();
  }, []);

  // Fetching based on region
  useEffect(() => {
    async function fetchBaseRegion() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${region}`
        );
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }

    if (invoke) {
      fetchBaseRegion();
      setInvoke(false);
    }
  }, [fetchedData, region, invoke]);

  const handleLiClick = (event) => {
    setRegion(event.target.textContent.toLowerCase().trim(""));
    setInvoke(true);
    setAnimate(false);
  };

  //   Toggling Icon

  const animateIcon = () => {
    setAnimate(!animate);
  };

  // Showing country indiviually
  const showFutherInfo = (countryName) => {
    if (countryName !== undefined) {
      setIndiviually(true);
      setCountryName(countryName);
    }
  };

  const backToMainPage = () => {
    setIndiviually(false);
  };

  return indiviually ? (
    <IndividualCountry
      individually={indiviually}
      name={countryName}
      onClick={backToMainPage}
    />
  ) : (
    <div className="main">
      <SearchFilter
        onClick={handleLiClick}
        inputVal={inputRef}
        handleFormSubmit={handleFormSubmit}
        animate={animate}
        animateIcon={animateIcon}
      />
      <Countries
        onClick={showFutherInfo}
        data={fetchedData.length > 0 ? fetchedData : allFetchedData}
      />
    </div>
  );
}

export default Main;
