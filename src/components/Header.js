import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <div className="header-delivery-container">
        <div>
          <ImLocation2 className="header-delivery-icon" />
        </div>
        <div>
          <div>Deliver to</div>
          <div className="header-delivery-stockholm">Stockholm</div>
        </div>
      </div>

      <div className="header-middle">
        <div className="header-searchbar-container">
          <input className="header-searchbar-input" />
          <div className="header-searchbar-icon-container">
            <BiSearchAlt className="header-searchbar-icon" />
          </div>
        </div>

        <img src="https://www.countryflags.io/se/flat/32.png" />
      </div>

      <div className="header-cart-container">
        <MdShoppingCart className="header-cart-icon" />
        <div className="header-cart-number">1</div>
      </div>
    </header>
  );
};

export default Header;
