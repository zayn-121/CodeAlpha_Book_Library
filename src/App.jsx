import { useState } from "react";
import Header from "./components/Header";
import Shimmer from "./components/Shimmer";
import Body from "./components/Body";
import Hero from "./components/Hero";
import BorrowedBook from "./components/BorrowedBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("preResponse");
  const handleSearch = (query) => {
    setIsLoading(true);
    // Simulate search results for now
    async function fetchData() {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const data = await response.json();
      setSearchResults(data);
      console.log("data", data);
      setIsLoading(false);
    }
    fetchData();
  };
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Hero handleSearch={handleSearch} />{" "}
                {isLoading ? (
                  <Shimmer />
                ) : (
                  <Body searchResults={searchResults} />
                )}
              </>
            }
          >
          </Route>
          <Route path="/borrowedbook" element={<BorrowedBook searchResults={searchResults}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

