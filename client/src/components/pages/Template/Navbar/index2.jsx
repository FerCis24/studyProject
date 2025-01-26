import React, { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { CartContext } from "../../../../context/Cart.Contex.jsx";
import { Cart } from "../../Cart/index.jsx";
import { getMenuItems, footerItem } from "../commonTemplate/index.jsx";
// import './style.css'

const { Header, Content, Footer } = Layout;

export const Navbar2 = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const { cartItems } = useContext(CartContext);

  
  const showDrawer = () => {
    setVisible(true);
  };
  
  const onClose = () => {
    setVisible(false);
  };

  const menuItems = getMenuItems(showDrawer)
  
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
              onClick={showDrawer}>
              <ShoppingCartOutlined
                style={{ fontSize: "24px", marginLeft: "8px" }}
              />
            </span>
            <Drawer type="primary" onClick={showDrawer}>
              <Cart open={visible} showDrawer={showDrawer} onClose={onClose} />
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
