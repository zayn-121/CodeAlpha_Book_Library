import BookResult from "./BookResult"

const Body = ({searchResults}) => {
  return (
    <div className="Body">
      <BookResult searchResults={searchResults}/>
    </div>
  )
}


export default Body