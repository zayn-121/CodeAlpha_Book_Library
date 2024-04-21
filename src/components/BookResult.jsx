// import harry from "../assets/harry potter.webp";
import { URL } from "./config/imageUrl";
const BookResult = ({ searchResults }) => {
  
  return (
    searchResults.docs && (
      <div className="BookResult">
        <div className="book">
          <img src={URL + searchResults?.docs?.[0].cover_i + "-M.jpg"} alt="" />
          <div className="book-info">
            <h2>{searchResults?.docs?.[0].title}</h2>
            <p>by {searchResults?.docs?.[0].author_name}</p>
            <small>
              First published in {searchResults?.docs?.[0].first_publish_year}
            </small>
          </div>
        </div>

        <div className="buttons">
          <button
            onClick={(e) => {
              e.target.disabled = true;
              e.target.style.backgroundColor = "#cccccc";
              e.target.style.cursor = "not-allowed";
            }}
          >
            Borrow
          </button>
        </div>
      </div>
    )
  );
};

export default BookResult;
