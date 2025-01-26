import React, { useContext } from "react";
import { Drawer, Space, Button } from "antd";
import { CartContext } from "../../../context/Cart.Contex.jsx";

export const Cart = ({ open, onClose }) => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const placement = 'right';

  return (
    <>
      <Drawer
        title="Carrito de Compras"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <div key={index}>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            ))}
            <div>
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
          </>
        ) : (
          <p>El carrito está vacío</p>
        )}
      </Drawer>
    </>
  );
};