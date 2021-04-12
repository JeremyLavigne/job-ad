import React from "react";
import { FaLinkedin } from "react-icons/fa";

const HirePage = ({ activePosition, activeWorktime, cartNumber }) => {
  return (
    <div className="hire-page">
      <h2>Shopping Cart</h2>

      <div className="hire-recap">
        {cartNumber === 1 ? (
          <>
            <div>
              <h3>Web Developer</h3>
              <div className="hire-details">
                Junior / {activePosition} / {activeWorktime}
              </div>
            </div>
            <div className="description-price">29.999 kr/mth</div>
          </>
        ) : (
          <>"Your cart is empty."</>
        )}
      </div>

      <div className="hire-contact">
        <p>Please get in touch ;)</p>
        <div className="hire-contact-links">
          <FaLinkedin className="hire-linkedIn-icon" />
          <div>lavigne.jeremy@post.com</div>
        </div>
      </div>
    </div>
  );
};

export default HirePage;
