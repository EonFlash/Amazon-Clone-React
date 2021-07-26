import React from "react";
import "../styling/Header.css";
import Logo from "../img/amazon-logo.png";
import Search from "../img/search.png";
import Location from "../img/location-logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={Logo} alt="Logo" />

      <div className="header-option-deliver">
        <img className="location-logo" src={Location} alt="location" />
        <span>Deliver to </span>

        <span> Address</span>
      </div>

      <div className="header-search">
        <input className="header-search-input" type="text" />
        <div className="search-logo">
          <img src={Search} alt="" />
        </div>
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span>Hello</span>

          <span> Sign in</span>
        </div>
        <div className="header-option">
          <span>Returns</span>

          <span> & Orders</span>
        </div>
        <div className="header-option">
          <span>Your</span>

          <span> Prime</span>
        </div>
        <div className="header-search-logo"></div>
      </div>
    </div>
  );
};

export default Header;
