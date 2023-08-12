import "./Main.css";
import Countries from "../Countries/Countries";
import SearchFilter from "../SearchFilter/SearchFilter";
function Main() {
  return (
    <div className="main">
      <SearchFilter />
      <Countries />
    </div>
  );
}

export default Main;
