import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Layout, Menu, Drawer, Button } from "antd";
import { ShoppingCartIcon } from "../../../common/Icons/Index";

const { Header, Sider, Content, Footer } = Layout;

export const Navbar = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout>
      <Header>
        {/*mi header con el menú */}
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
            {/* <Link to="/carrito"><ShoppingCartIcon /></Link> */}

            <span
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={showDrawer}
            >
              <ShoppingCartIcon />
            </span>
            <Drawer
              title="Carrito de Compras"
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              {/* Contenido del carrito */}
              <p>Producto 1</p>
              <p>Producto 2</p>
              <p>Producto 3</p>
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
