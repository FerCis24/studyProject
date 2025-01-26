import React, { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { CartContext } from "../../../../context/Cart.Contex.jsx";
import { Cart } from "../../Cart/index.jsx";
import { getMenuItems, footerItem } from "../commonTemplate/index.jsx";
// import './style.css'

const { Header, Content, Footer } = Layout;

export const Navbar = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const { cartItems } = useContext(CartContext);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = getMenuItems(showDrawer);

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
        <Cart open={visible} onClose={onClose} />
      </Header>
      <Content style={{ padding: "0 50px", justifyContent: "center" }}>
        {children}
      </Content>
      <Footer style={{ textAlign: "center", marginTop: "100%" }}>
        {footerItem}
      </Footer>
    </Layout>
  );
};
