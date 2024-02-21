const SearchComponent = (props) => {
    const {searchInput, handleSearchInputChange, handleSearch} = props;
    
    return (
        <div className="search-container">
            <input 
                type="search"
                placeholder="Search for Restaurants, Cuisines"
                value={searchInput}
                className="search-input"
                onChange={(event) => handleSearchInputChange(event)}
            />
            <button
                className="search-btn"
                onClick={() => handleSearch()}
            >
                Search
            </button>
        </div>
    )
}

export default SearchComponent;