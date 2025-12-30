import React from "react";

const Search = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = React.useState<string>("");
  const handleSearch = () => {
    console.log("Clicked search with query:", query);
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
