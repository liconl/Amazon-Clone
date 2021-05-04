import React from "react";
import "./SecondHeader.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";

function SecondHeader() {
  return (
    <div className="secondHeader">
      <div className="secondHeader_option">
        <MenuIcon style={{ fontSize: 42 }} />
        <span className="secondHeader_text">All</span>
      </div>

      <div className="secondHeader_option">
        <span> Best Sellers</span>
      </div>
      <div className="secondHeader_option prime_section">
        <span>
          Prime
          <span className="secondHeader_icon">
            <ArrowDropDownIcon
              style={{
                fontSize: 24,
                position: "absolute",
                marginTop: 4,
              }}
            />
          </span>
        </span>
      </div>

      <div className="secondHeader_option">
        <span> Today's Deals</span>
      </div>
      <div className="secondHeader_option">
        <span> Customer Service</span>
      </div>
      <div className="secondHeader_option">
        <span> New Releases</span>
      </div>
      <div className="secondHeader_option">
        <span> Books</span>
      </div>
      <div className="secondHeader_option">
        <span> Fashion</span>
      </div>

      <div className="secondHeader_option">
        <span> Kindle Books</span>
      </div>

      <div className="secondHeader_option">
        <span> Find a Gift</span>
      </div>
      <div className="secondHeader_option">
        <span> Gift Cards</span>
      </div>
      <div className="secondHeader_option">
        <span> Toys & Games</span>
      </div>
      <div className="secondHeader_option">
        <span> Amazon Home</span>
      </div>
      <div className="secondHeader_option">
        <span> Pharmacy</span>
      </div>
      <div className="secondHeader_option">
        <span> Sell</span>
      </div>
      <div className="secondHeader_option">
        <span> Computers</span>
      </div>
      <div className="secondHeader_option">
        <span> Video Games</span>
      </div>
      <div className="secondHeader_option">
        <span> Amazon Basics</span>
      </div>
      <div className="secondHeader_option">
        <span> Coupons</span>
      </div>
      <div className="secondHeader_option block_section">
        <span> &nbsp; </span>
      </div>
    </div>
  );
}

export default SecondHeader;
