import React from "react";
// npm install @antd
import { Card } from "antd";
const { Meta } = Card;
// npm install @ant-design/icons --save
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";

export const CardProduct = ({ title, price, description, category, image }) => {
  return (
    <Card
    hoverable
    style={{
      width: 350,
      margin: "25px",
      justifyContent: "center",
    }}
    cover={<img alt={title} src={image} />}>
        <Meta title={title} description={description} />
        <div>
          <span>
            <b>$ {price}</b>
          </span>
          <div className="icons">
            <button className="icon-with-text">
              <ShoppingCartOutlined
                style={{ fontSize: "24px", marginRight: "10px", color: "grey" }}
                />
              <span>Agregar al carrito</span>
            </button>
            <button className="icon-with-text">
              <EyeOutlined style={{ fontSize: "24px", color: "grey" }} />
              <span>Ver</span>
            </button>
          </div>
        </div>
      </Card>
  );
};

// import React from "react";
// // npm install @ant-design/icons --save
// import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons";
// import "../../../../src/CardProduct.css";

// export const CardProduct = ({ title, price, description, category, image }) => {
//   return (
//     <div className="product-card">
//       <h4>Producto: {title}</h4>
//       <img src={image} alt={title} style={ {with: "200px", height: "200px" }} className="product-image" />
//       <p> {description} </p>
//       <span>
//         <b>{price}</b>
//       </span>
//       <div className="icons">
//         <button className="icon-with-text">
//           <ShoppingCartOutlined
//             style={{ fontSize: "24px", marginRight: "10px" }}
//           />
//           <span>Agregar al carrito</span>
//         </button>
//         <button className="icon-with-text">
//           <EyeOutlined style={{ fontSize: "24px", border: "1px" }} />
//           <span>Ver</span>
//         </button>
//       </div>
//     </div>
//   );
// };
