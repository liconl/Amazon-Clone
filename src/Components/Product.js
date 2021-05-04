import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating, link }) {
  return (
    <div className="product">
      <h1 className="product_title">{title}</h1>
      <img className="product_image" alt="product_image" src={image} />
      <a className="product_link" href="https://www.amazon.com/">
        {link}
      </a>
    </div>
  );
}

export default Product;
