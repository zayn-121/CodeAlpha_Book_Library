import harry from "../assets/harry potter.webp";
import { URL } from "./config/imageUrl";


const BorrowedBook = ({ searchResults }) => {
  return (
    <div className="BorrowedBook">
      {searchResults?.docs?.length > 0 ? (
        <div className="BorrowedBook-wrapper">
          <img src={URL + searchResults?.docs?.[0].cover_i + "-M.jpg"} alt="img" />
          <div className="BorrowedBook-info">
            <h2>{searchResults?.docs?.[0].title}</h2>
          </div>
          <div className="BorrowedBook-buttons">
            <button>Return</button>
          </div>
        </div>
      ) : (
        <h1>No book borrowed !</h1>
      )}
    </div>
  );
};

export default BorrowedBook;
