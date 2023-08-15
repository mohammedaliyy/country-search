import "./Countries.css";

function Countries({ data, onClick }) {
  const getCountryName = (e) => {
    const countryName = e.target
      .closest(".countries__box")
      ?.getAttribute("data-country-name")
      .toLowerCase();
    onClick(countryName);
  };
  return (
    <div className="countries" onClick={getCountryName}>
      {data.map((actualData) => {
        return (
          <div
            className="countries__box"
            key={actualData.name.official}
            data-country-name={actualData.name.official}
          >
            <div className="countries__img">
              <img src={actualData.flags.svg} alt={actualData.flags.alt} />
            </div>
            <div className="countries__info">
              <h3>{actualData.name.official}</h3>
              <p>
                Population:
                <span> {actualData.population.toLocaleString()}</span>
              </p>
              <p>
                Region:
                <span> {actualData.region}</span>
              </p>
              <p>
                Capital:
                <span>
                  {" "}
                  {actualData.capital === undefined
                    ? null
                    : actualData.capital.map((e) => e)}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Countries;
