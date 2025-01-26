import React, { useContext } from "react";
import { Card } from "antd"; // npm install @antd
import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons"; // npm install @ant-design/icons --save
import { CartContext } from "../../../context/Cart.Contex.jsx";
import "./CardProduct.module.css";

const { Meta } = Card;

export const CardProduct = ({ id, title, description, price, image }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = { id, title, description, price, image };
    addToCart(product);
  };

  return (
    <Card
      hoverable
      style={{
        width: 350,
        margin: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      cover={
        <img
          alt={title}
          src={image}
          style={{ width: "100%", height: "auto" }}
        />
      }>
      <Meta
        title={title}
        description={description}
        style={{ textAlign: "center" }}
      />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <span>
          <b>$ {price}</b>
        </span>
        <div
          className="icons"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}>
          <button
            type="primary"
            icon={<ShoppingCartOutlined />}
            onClick={handleAddToCart}
            className="icon-with-text"
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
            }}>
            Agregar al carrito
          </button>
          <button
            type="primary"
            icon={<EyeOutlined />}
            className="icon-with-text"
            style={{ display: "flex", alignItems: "center" }}>
            Ver
          </button>
        </div>
      </div>
    </Card>
  );
};

//////////////////////////////////////////
// import React, { useContext } from "react";
// import { Card } from "antd"; // npm install @antd
// import { ShoppingCartOutlined, EyeOutlined } from "@ant-design/icons"; // npm install @ant-design/icons --save
// import { CartContext } from "../../../context/Cart.Contex.jsx";
// import "./CardProduct.module.css";

// const { Meta } = Card;

// export const CardProduct = ({ id, title, description, price, image }) => {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = () => {
//     const product = { id, title, description, price, image };
//     addToCart(product);
//   };

//   return (
//     <Card
//       hoverable
//       style={{
//         width: 350,
//         margin: "25px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//       cover={
//         <img
//           alt={title}
//           src={image}
//           style={{ width: "100%", height: "auto" }}
//         />
//       }>
//       <Meta
//         title={title}
//         description={description}
//         style={{ textAlign: "center" }}
//       />
//       <div style={{ textAlign: "center", marginTop: "10px" }}>
//         <span>
//           <b>$ {price}</b>
//         </span>
//         <div
//           className="icons"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             marginTop: "10px",
//           }}>
//           <button
//             className="icon-with-text"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               marginTop: "10px",
//             }}>
//             <ShoppingCartOutlined
//               style={{ fontSize: "24px", marginInline: "10px", color: "grey" }}
//             />
//             <span>Agregar al carrito</span>
//           </button>
//           <button
//             className="icon-with-text"
//             style={{ display: "flex", alignItems: "center" }}
//           >
//             <EyeOutlined style={{ fontSize: "24px", color: "grey" }} />
//             <span>Ver</span>
//           </button>
//         </div>
//       </div>
//     </Card>
//   );
// };
