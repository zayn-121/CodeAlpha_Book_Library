import { FaHandHoldingHand } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";


function NavIcon() {
  const navigate = useNavigate()
  function handleClick() {
    console.log("clicked");

    navigate("/borrowedbook")

  }
  return (
    <div className="NavIcon">
      <Link to="/"><h1>My Book Store</h1></Link>
      <div className="icon">
        <p onClick={handleClick}>
          {<FaHandHoldingHand />}<span>Borrowed</span>
        </p>

        <p>
          {<FaRegHeart />} <span>Favorite</span>
        </p>

        <p>
          {<CgProfile />} <span>Profile</span>
        </p>
      </div>
    </div>
  );
}

export default NavIcon;
