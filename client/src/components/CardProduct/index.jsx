import React from "react";

export const CardProduct = (name, price, description) => {
  return (
    <div>
      <h4>Producto: {name}</h4>
      <h4>Precio: {price}</h4>
      <p>Descripción: {description}</p>

      <span>------------------------</span>
    </div>
  );
};
