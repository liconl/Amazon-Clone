import React, { useState } from "react";
import "./SliderLarge.css";

function SliderLarge(props) {
  const [sliderValue, setSliderValue] = useState(0);

  const stlying = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 2,
    marginRight: `${sliderValue - 500}px `,
    position: "absolute",
  };

  return (
    <div className="sliderlarge">
      <h2 className="sliderlarge_title">{props.title}</h2>
      <input
        className="sliderlarge_slider"
        type="range"
        min="1"
        max="1000"
        onChange={(e) => setSliderValue(e.target.value)}
      />

      <div style={stlying}>
        <div className="image_container">
          <img className="image_large" src={props.image1} />
          <img className="image_large" src={props.image2} />
          <img className="image_large" src={props.image3} />
          <img className="image_large" src={props.image4} />
          <img className="image_large" src={props.image5} />
          <img className="image_large" src={props.image6} />
          <img className="image_large" src={props.image7} />
          <img className="image_large" src={props.image8} />
          <img className="image_large" src={props.image9} />
          <img className="image_large" src={props.image10} />
          <img className="image_large" src={props.image11} />
          <img className="image_large" src={props.image12} />
        </div>
      </div>
    </div>
  );
}

export default SliderLarge;
