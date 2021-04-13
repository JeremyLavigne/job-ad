import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import devLogo from "../../assets/dev_logo.png";

const HirePage = ({ activePosition, activeWorktime, cartNumber }) => {
  return (
    <div className="hire-page">
      <div className="hire-header">
        <h2>Shopping Cart</h2>
        <Link to="/">
          <button className="back-button">Back</button>
        </Link>
      </div>

      <div className="hire-recap">
        {cartNumber === 1 ? (
          <>
            <div className="hire-recap-left">
              <img src={devLogo} alt="dev_logo" className="dev-logo" />
              <div>
                <h3>Web Developer</h3>
                <div className="hire-details">
                  Junior / {activePosition} / {activeWorktime}
                </div>
              </div>
            </div>
            <div className="description-price">29.999 kr/mth</div>
          </>
        ) : (
          <>Your cart is empty.</>
        )}
      </div>

      <div className="hire-contact">
        <p>Get in touch ;)</p>
        <div className="hire-contact-links">
          <a
            href="https://www.linkedin.com/in/jeremylavigne16/"
            target="_blank"
            rel="nonopenner"
          >
            <FaLinkedin className="hire-linkedIn-icon" />
          </a>
          <div className="hire-mail-link">lavigne.jeremy@post.com</div>
        </div>
      </div>
    </div>
  );
};

export default HirePage;
