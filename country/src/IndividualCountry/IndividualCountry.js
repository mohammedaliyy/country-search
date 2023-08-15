import "./IndividualCountry.css";
import { useRef, useEffect, useState } from "react";
import L from "../../node_modules/leaflet/dist/leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";
import { BiArrowBack } from "react-icons/bi";
function IndividualCountry({ onClick, name, individually }) {
  const mapRef = useRef(null);
  const [fetchedData, setFetchedData] = useState();
  const [invoke, setInvoke] = useState(false);

  // Fetching country individually

  useEffect(() => {
    async function fetchIndividualCountry() {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    }
    if (individually && !invoke) {
      fetchIndividualCountry();
      setInvoke(true);
    }
  }, [invoke, individually, name]);

  useEffect(() => {
    if (fetchedData && !mapRef.current) {
      // Create the map instance
      mapRef.current = L.map("map").setView(fetchedData[0].latlng, 5);

      // Add a tile layer from OpenStreetMap
      L.tileLayer(
        `https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}`
      ).addTo(mapRef.current);

      // Add a marker at the specified coordinates
      L.popup(fetchedData[0].latlng, {
        content: `<h2>${fetchedData[0].name.common}</h2>`,
      }).openOn(mapRef.current);
    }
  }, [fetchedData]);

  // Destructuring data from Country data
  const nameOfCountry = fetchedData?.[0].name.common;
  const pictureOfCountry = fetchedData?.[0].flags.svg;
  const altOfCountry = fetchedData?.[0].flags.alt;
  const regionOfCountry = fetchedData?.[0].region;
  const populationOfCountry = fetchedData?.[0].population.toLocaleString();
  const capitalOfCountry = fetchedData?.[0].capital[0];
  const subregionOfCountry = fetchedData?.[0].subregion;
  const bordersOfCountry = fetchedData?.[0].borders
    ? fetchedData?.[0].borders
    : ["unavailable"];
  const languagesOfCountry = fetchedData
    ? Object.values(fetchedData?.[0].languages)
    : ["unavailable"];
  const currenciesOfCountry = fetchedData
    ? Object.values(fetchedData?.[0].currencies)[0].name
    : "unavailable";
  const tldOfCountry = fetchedData ? fetchedData?.[0].tld : ["unavailable"];

  const arrOfNativeNames = [];
  if (fetchedData) {
    for (let value of Object.values(fetchedData?.[0].name.nativeName)) {
      arrOfNativeNames.push(value.common);
    }
  }

  return (
    <div className="individual">
      <div className="individual__btn">
        <button onClick={onClick}>
          <BiArrowBack className="individual__icon" />
          Back
        </button>
      </div>
      <div className="individual__country">
        <div id="map"></div>
        <div className="individual__info">
          <div className="individual__img">
            <img src={pictureOfCountry} alt={altOfCountry} />
          </div>
          <div className="individual__desc">
            <h1>{nameOfCountry}</h1>
            <ul>
              <div className="individual__sub--1">
                <li>
                  Native Name:{" "}
                  {arrOfNativeNames.map((nativeNames) => (
                    <span key={nativeNames}>{nativeNames}</span>
                  ))}
                </li>
                <li>
                  Population: <span>{populationOfCountry}</span>
                </li>
                <li>
                  Region: <span>{regionOfCountry}</span>
                </li>
                <li>
                  Sub Region: <span>{subregionOfCountry}</span>
                </li>
                <li>
                  Capital: <span>{capitalOfCountry}</span>
                </li>
              </div>
              <div className="individual__sub--2">
                <li>
                  Top Level Domain:{" "}
                  {tldOfCountry.map((tld) => (
                    <span key={tld}>{tld}</span>
                  ))}
                </li>
                <li>
                  Currencies: <span>{currenciesOfCountry}</span>
                </li>
                <li>
                  Languages:
                  {languagesOfCountry.map((language) => (
                    <span key={language}>{language}</span>
                  ))}
                </li>
              </div>
            </ul>
            <div className="countries__border">
              Border Countries:
              {bordersOfCountry
                ? bordersOfCountry.map((borderCountry) => (
                    <span key={borderCountry}>{borderCountry}</span>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualCountry;
