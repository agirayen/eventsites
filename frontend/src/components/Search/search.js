import main from "./Main";

export const Search = (props) => {
  return (
    <div className="SearchField">
      <input id="Zipcodetext" value="zipcode" />
      <button name="submit" value="Search" onClick={main}>
        Search
      </button>
    </div>
  );
};
export default Search;
