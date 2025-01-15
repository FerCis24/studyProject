import React from "react";
import { Flex, Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

export const Navbar = ({ children }) => {
  return (
    <Layout>
      <Header>
        {/*mi header con el menú */}
        <div className="logo" />
        <Menu 
          theme="dark" 
          mode="horizontal" 
          defaultSelectedKeys={["1"]}
        >
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
            <Link to="/carrito">Carrito</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/contacto">Contacto</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px", marginTop: 64 }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>Pie de página Enero 2025</Footer>
    </Layout>
  );
};
