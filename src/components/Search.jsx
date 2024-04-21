import { useState } from "react";

function Search( {handleSearch} ) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
    setSearchQuery("");
  };
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} placeholder="Search a book" onChange={handleChange}/>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
