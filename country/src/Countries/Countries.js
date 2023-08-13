import "./Countries.css";

function Countries({ data }) {
  console.log(data);
  return (
    <div className="countries">
      {data.map((actualData) => {
        return (
          <div className="countries__box" key={actualData.name.official}>
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
