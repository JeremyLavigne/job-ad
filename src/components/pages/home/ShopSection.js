import React from "react";
import { ImLocation2 } from "react-icons/im";

const Button = ({ content }) => {
  return <button className="shop-btn">{content}</button>;
};

const ShopSection = () => {
  return (
    <article className="shop-section">
      <div className="shop-section-top">
        <div>
          <span className="description-price">29999 kr/mth</span>
          <span className="shop-fees">No shipping fees.</span>
        </div>

        <div>
          Arrives: <span className="shop-arrives">Next Monday</span>
        </div>

        <div className="shop-stock">In Stock.</div>
      </div>

      <div className="shop-buttons-container">
        <Button content="Add to Cart" />
        <Button content="Hire Now" />
      </div>

      <div className="header-delivery-container">
        <ImLocation2 className="header-delivery-icon" />
        <span className="header-delivery-stockholm">Deliver to Stockholm</span>
      </div>
    </article>
  );
};

export default ShopSection;
