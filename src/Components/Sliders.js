import React, { useState } from "react";
import "./Sliders.css";

function Sliders(props) {
  const [sliderValue, setSliderValue] = useState(0);

  const stlying = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: -2,
    marginRight: `${sliderValue - 711}px `,
    position: "absolute",
  };

  console.log(sliderValue);
  return (
    <div className="sliders">
      <h2 className="sliders_title">{props.title}</h2>
      <input
        className="sliders_slider"
        type="range"
        min="1"
        max="1000"
        onChange={(e) => setSliderValue(e.target.value)}
      />

      <div style={stlying}>
        <div className="image_container">
          <img className="image" src={props.image1} alt="product_image" />
          <img className="image" src={props.image2} alt="product_image" />
          <img className="image" src={props.image3} alt="product_image" />
          <img className="image" src={props.image4} alt="product_image" />
          <img className="image" src={props.image5} alt="product_image" />
          <img className="image" src={props.image6} alt="product_image" />
          <img className="image" src={props.image7} alt="product_image" />
          <img className="image" src={props.image8} alt="product_image" />
          <img className="image" src={props.image9} alt="product_image" />
          <img className="image" src={props.image10} alt="product_image" />
          <img className="image" src={props.image11} alt="product_image" />
          <img className="image" src={props.image12} alt="product_image" />
          <img className="image" src={props.image13} alt="product_image" />
          <img className="image" src={props.image14} alt="product_image" />
        </div>
      </div>
    </div>
  );
}

export default Sliders;
