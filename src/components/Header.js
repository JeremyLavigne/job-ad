import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className="header-delivery-container">
        <ImLocation2 className="header-delivery-icon" />
        <span className="header-delivery-stockholm">Deliver to Stockholm</span>
      </div>

      <div className="header-searchbar-container">
        <input />
      </div>

      <div className="header-flag-container">
        <img src="https://www.countryflags.io/se/flat/32.png" />
      </div>

      <div className="header-cart-container">
        <MdShoppingCart />
        <span className="header-cart-number">0</span>
      </div>
    </header>
  );
};

export default Header;
