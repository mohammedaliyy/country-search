import { useRef, useState, useEffect } from "react";
import "./Main.css";
import Countries from "../Countries/Countries";
import SearchFilter from "../SearchFilter/SearchFilter";
function Main() {
  const inputRef = useRef(null);
  const [fetchedData, setFetchedData] = useState([]);
  const [allFetchedData, setAllFetchedData] = useState([]);
  const [submit, setSubmit] = useState();
  const [inputValue, setInputValue] = useState();

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

  return (
    <div className="main">
      <SearchFilter inputVal={inputRef} handleFormSubmit={handleFormSubmit} />
      <Countries data={fetchedData.length > 0 ? fetchedData : allFetchedData} />
    </div>
  );
}

export default Main;
