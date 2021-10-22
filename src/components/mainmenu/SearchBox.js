function SearchBox() {
  return (
    <form className="SearchBox" action="/" method="get">
      <label htmlFor="SearchText">
        <span className="SearchTextHidden">Search for reviews</span>
      </label>
      <input
        className="SearchText"
        id="SearchText"
        name="search"
        type="text"
        placeholder="Type to search"
      />
      <button type="submit" className="SearchButton">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBox;
