import React from "react";

export const CardProduct = ({title, price, description, category, image}) => {
  return (
    <div className="product-card">
      <h4>Producto: {title}</h4>
      <img src= {image} alt={title} />
      <p> {description} </p>
      <span>
        <b>{price}</b>
      </span>
      <button>Comprar</button>
    </div>
  );
};
