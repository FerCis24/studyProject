import React, { useContext, useState } from "react";
import { Layout, Menu, Drawer } from "antd";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
// import { ShoppingCartIcon } from "../../../common/Icons/Index";//o uno o el otro
import { CartContext } from "../../../../context/Cart.Contex.jsx";
// import './style.css'

const { Header, Content, Footer } = Layout;

export const Navbar = ({ children }) => {
  const [visible, setVisible] = useState(false);// con este hook guardo el estado visible, una función que me permite modificar ese estado y un estado por defecto
  const { cartItems } = useContext(CartContext);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/">Inicio</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/tienda">Tienda</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contacto">Contacto</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={showDrawer}
            >
              <ShoppingCartOutlined
                style={{ fontSize: "24px", marginRight: "8px" }}
              />
            </span>
            <Drawer
              title="Carrito de Compras"
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              {cartItems.lenght > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index}>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                  </div>
                ))
              ) : (
                <p>El carrito está vacío</p>
              )}
            </Drawer>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", justifyContent: "center" }}>
        {children}
      </Content>
      <Footer style={{ textAlign: "center", marginTop: "100%" }}>
        Pie de página Enero 2025
      </Footer>
    </Layout>
  );
};
