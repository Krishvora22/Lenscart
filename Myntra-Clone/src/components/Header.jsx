// import { BsFillPersonFill } from "react-icons/bs";
// import { FaHeart } from "react-icons/fa";
// import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const bag = useSelector(store => store.bag);

  return (
    <>
      <header>
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="../../images/k1.jpg"
              alt="Myntra Logo"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="/category/men">Men</a>
          <a href="/category/women">Women</a>
          <a href="/category/kids">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            {/* <BsFillPersonFill /> */}
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            {/* <FaHeart /> */}
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            {/* <FaShoppingBag /> */}
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
