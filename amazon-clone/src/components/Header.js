import React from "react";
import "../styling/Header.css";
import Logo from "../img/amazon-logo.png";
import Search from "../img/search.png";
import Location from "../img/location-logo.png";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";

const Header = () => {
  return (
    <div className="header">
      <img className="header-logo" src={Logo} alt="Logo" />

      <div className="header-option-deliver">
        <LocationOnOutlinedIcon />
        <span>Deliver to </span>

        <span> Address</span>
      </div>

      <div className="header-search">
        <input className="header-search-input" type="text" />
        <div className="search-logo">
          <img className="search" src={Search} alt="" />
        </div>
      </div>

      <div className="header-nav">
        <div className="globe">
          <LanguageOutlinedIcon
            className="globe-icon"
            style={{ fontSize: 35 }}
          />
        </div>

        <div className="header-option">
          <span className="header-optionlineone">Hello</span>

          <span className="header-optionlinetwo"> Sign in</span>
        </div>
        <div className="header-option">
          <span className="header-optionlineone">Returns</span>

          <span className="header-optionlinetwo"> & Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionlineone">Your</span>

          <span className="header-optionlinetwo"> Prime</span>
        </div>
        <div className="header-search-logo"></div>

        <div className="header-optionbasket">
          <ShoppingBasketIcon />

          <span className="header-optionlinetwo header-basketcount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
