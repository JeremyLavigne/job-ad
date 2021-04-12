import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdShoppingCart } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Button = ({ content, onClick }) => {
  return (
    <button className="shop-btn" onClick={onClick}>
      {content === "Add to Cart" ? (
        <MdShoppingCart className="shop-btn-icon" />
      ) : content === "Hire Now" ? (
        <BsPlayFill className="shop-btn-icon" />
      ) : null}
      <span className="shop-btn-content">{content}</span>
    </button>
  );
};

const ShopSection = ({ setCartNumber, cartNumber }) => {
  return (
    <article className="shop-section">
      <div className="shop-section-top">
        <div>
          <span className="description-price shop-price">29.999 kr/mth</span>
          <span className="shop-fees">No shipping fees</span>
        </div>

        <div>
          Arrives: <span className="shop-arrives">Next Monday</span>
        </div>

        <div className="shop-stock">In Stock.</div>
      </div>

      <div className="shop-buttons-container">
        {cartNumber === 0 ? (
          <Button content="Add to Cart" onClick={() => setCartNumber(1)} />
        ) : (
          <Button content="Remove" onClick={() => setCartNumber(0)} />
        )}
        <Link to="/hire" className="shop-btn-link">
          <Button content="Hire Now" onClick={() => setCartNumber(1)} />
        </Link>
      </div>

      <div className="header-delivery-container">
        <div>
          <ImLocation2 className="header-delivery-icon" />
        </div>
        <div>
          <div>Deliver to</div>
          <div className="header-delivery-stockholm">Stockholm</div>
        </div>
      </div>
    </article>
  );
};

export default ShopSection;
