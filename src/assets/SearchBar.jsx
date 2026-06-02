function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search employee by name..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;