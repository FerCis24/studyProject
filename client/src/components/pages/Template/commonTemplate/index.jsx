import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const getMenuItems = (showDrawer) => [
  {
    key: "1",
    label: <Link to="/">Inicio</Link>,
  },
  {
    key: "2",
    label: <Link to="/tienda">Tienda</Link>,
  },
  {
    key: "3",
    label: <Link to="/login">Login</Link>,
  },
  {
    key: "4",
    label: <Link to="/contacto">Contacto</Link>,
  },
  {
    key: "5",
    label: (
      <span
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        onClick={showDrawer}>
        <ShoppingCartOutlined style={{ fontSize: "24px", marginLeft: "8px" }} />
      </span>
    ),
  },
];

export const footerItem = "Pie de página. Enero 2025";
