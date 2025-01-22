import React from "react";
import { Carousel as AntdCarousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export const Portada = () => {
  <AntdCarousel autoplay>
    <div>
      <img src="http://localhost:3000/public/Carrousel_1.webp" />
    </div>
    <div>
      <img src="http://localhost:3000/public/Carrousel_1.webp" />
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <img src="http://localhost:3000/public/Carrousel_1.webp" />
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <img src="http://localhost:3000/public/Carrousel_1.webp" />
      <h3 style={contentStyle}>4</h3>
    </div>
  </AntdCarousel>;
};
