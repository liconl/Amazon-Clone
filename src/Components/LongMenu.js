import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const options = [
  "All Departments",
  "Audible Books & Originals",
  "Alexa Skills",
  "Amazon Devices",
  "Amazon Fresh",
  "Amazon Pharmacy",
  "Amazon Warehouse",
  "Appliances",
  "Apps & Games",
  "Arts, Crafts & Sewing",
  "Automotive Parts & Accessories",
  "Baby",
  "Beauty & Personal Care",
  "Books",
  "CDs & Vinyl",
  "Cell Phones & Accessories",
  "Clothing, Shoes & Jewelry",
  "  Women",
  "  Men",
  "  Girls",
  "  Boys",
  "  Baby",
  "Under $10",
  "Amazon Explore",
  "Amazon Pantry",
  "Collectibles & Fine Art",
  "Computers",
  "Courses",
  "Credit and Payment Cards",
  "Digital Educational Resources",
  "Digital Music",
  "Electronics",
  "Garden & Outdoor",
  "Gift Cards",
  "Grocery & Gourmet Food",
  "Handmade",
  "Health, Household & Baby Care",
  "Home & Business Services",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Just for Prime",
  "Kindle Store",
  "Luggage & Travel Gear",
  "Magazine Subscriptions",
  "Movies & TV",
  "Musical Instruments",
  "Office Products",
  "Pet Supplies",
  "Premium Beauty",
  "Prime Video",
  "Smart Home",
  "Software",
  "Sports & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
  "Vehicles",
  "Video Games",
  "Whole Foods Market",
];

const ITEM_HEIGHT = 72;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const downMenuStyle = {
    paddingBottom: "10px",
    marginTop: "-12px",
    marginRight: "-5px",
    marginLeft: "-10px",
  };
  const [curr, SetCurr] = useState();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <ArrowDropDownIcon style={downMenuStyle} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "40ch",
          },
        }}
      >
        {options.map((option, i) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={(e) => {
              SetCurr(option);
              handleClose();
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
