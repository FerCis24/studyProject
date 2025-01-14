import React from "react";
// npm install @ant-design/icons --save
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
import "../../../../src/CardProduct.css";

export const CardProduct = ({ title, price, description, category, image }) => {
  return (
    <div className="product-card">
      <h4>Producto: {title}</h4>
      <img src={image} alt={title} className="product-image" />
      <p> {description} </p>
      <span>
        <b>{price}</b>
      </span>
      <div className="icons">
        <button className="icon-with-text">
          <ShoppingCartOutlined
            style={{ fontSize: "24px", marginRight: "10px" }}
          />
          <span>Agregar al carrito</span>
        </button>
        <button className="icon-with-text">
          <EyeOutlined style={{ fontSize: "24px" }} />
          <span>Ver</span>
        </button>
      </div>
    </div>
  );
};
