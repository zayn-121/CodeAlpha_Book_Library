import Search from "./Search";

const Hero = ({ handleSearch }) => {
  return (
    <div className="Hero">
      <Search handleSearch={handleSearch} />
    </div>
  );
};

export default Hero;
