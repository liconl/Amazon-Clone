import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LongMenu from "./LongMenu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header(props) {
  const [clicked, setClicked] = useState(true);
  const [iconClicked, setIconClicked] = useState(true);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      alert("This is a clone! It does not have a full item data base!");
    }
  };
  const SearchAlert = () => {
    alert("This is a clone! It does not have a full item data base!");
  };

  return (
    <div className="header">
      <div className="header_logo_container">
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon_logo"
          ></img>
        </Link>
      </div>
      <div className="header_address">
        <div className="header_address_container">
          <div className="header_address_icon">
            <LocationOnIcon style={{ fill: "white", fontSize: "28" }} />
          </div>

          <div className="header_address_greeting">Hello</div>
          <div className="header_address_location">Select your address</div>
        </div>
      </div>

      <div
        className={clicked === true ? "header_search" : "header_search_clicked"}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <span
          className={
            iconClicked
              ? "header_departmentButton"
              : "header_departmentButton_clicked"
          }
          onClick={() => {
            setClicked(!clicked);
            setIconClicked(!iconClicked);
          }}
        >
          <span className="header_departmentText">All</span>
          <span className="header_departmentIcon">
            <LongMenu />
          </span>
        </span>
        <input
          className="header_search_input"
          type="text"
          onKeyDown={handleKeyPress}
        />
        <span className="header_searchIcon" onClick={SearchAlert}>
          <SearchIcon
            style={{ fontSize: "40", fill: "#474449", marginTop: "-4" }}
          />
        </span>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <div className="header_flag">
            <img
              alt="us_flag"
              className="header_navlogo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1RwzaWKsByEWUcUGO_GGppcOa6t13sbSug&usqp=CAU"
            />
            <span className="header_navlogoIcon">
              <ExpandMoreIcon />
            </span>
          </div>
        </div>
        <div className="header_option header_signin">
          <span className="header_optionLineOne">Hello, Sign In</span>
          <div>
            <span className="header_optionLineTwo header_account">
              Account & Lists
              <span className="header_signin_icon">
                <ArrowDropDownIcon />
              </span>
            </span>
          </div>
        </div>
        <div className="header_option header_returns ">
          <span className="header_optionLineOne header_orders">Returns</span>
          <span className="header_optionLineTwo ">& Orders</span>
        </div>

        <div className="header_option">
          <div className="header_optionBasket">
            <div>
              <ShoppingCartOutlinedIcon style={{ fontSize: 40 }} />
            </div>
            <div className="header_optionLineTwo header_basketCount">0</div>
          </div>
          <span className="header_cart">Cart</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
