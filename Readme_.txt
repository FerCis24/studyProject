GESTIONAR VARIAS PÁGINAS EN EL FRONT CON LA LIBRERIA:
https://www.npmjs.com/package/react-router-dom

npm i react-router-dom

ANT DESIGN UI
https://ant.design/
https://ant.design/components/layout

In the Front (React) → 
    npm i antd +[E]
    import { Layout } from "antd";

GIT
→ git add .
→ git commit -m "mi mensaje"
→ git push origin main
    Asegúrate de reemplazar main con el nombre de la rama 
    en la que estás trabajando si es diferente.

→ git status

FORZAR CERRAR PUERTO 
Encuentra y termina el proceso que está utilizando el puerto 3000: Puedes encontrar y terminar el proceso que está utilizando el puerto 3000 utilizando el siguiente comando en la terminal de Windows:
→ 
    netstat -ano | findstr :3000

Esto te dará una lista de procesos que están utilizando el puerto 3000. Luego, puedes terminar el proceso utilizando el comando taskkill con el ID del proceso (PID) que obtuviste del comando anterior:
→ 
    taskkill /PID <PID> /F

Reemplaza <PID> con el ID del proceso que está utilizando el puerto 3000.

Cambia el puerto en tu aplicación: Si no puedes liberar el puerto 3000, puedes cambiar el puerto en tu aplicación a otro puerto disponible. Por ejemplo, puedes cambiar el puerto a 3001 en tu archivo app.js:

CSS class-name 
→ PATRON BEM
    → BLOQ
    → ELEMENT
    → MODIFIER
ejemplo → class-name: header-button-large
→ PATRONES EN LINEA
style={"js"{object}} → object={ property: "string-value" } ó num sin %, px, etc
ejemplo → 
<button style={{
    padding: "5px",
    border-radius: "5px"
}} />
ejemplo → ternario
style={{
    padding: 5,
    backgraund-color: tema === "dark" ? "white" : "black",
}}
------------------------------------------------------
→ REACT → CART DRAWER →
1. Creé un contexto para el carrito, en donde manejo el estado del carrito en un contexto para que ambos componentes puedan acceder a él
2. Envolvi mi aplicación con el CartProvider: ¿Tiene toda mi api acceso  al contexto del carrito?
3. Modifiqué el componente CardProduct utilizando el contexto para agregar productos al carrito.
4. Mostré los productos en el Drawer del componente Navbar utilizando el contexto para mostrar los productos en el Drawer

------------------------------------------------------
//1. filepath: /c:/Users/ferci/ICARO-LOCAL/studyProject/client/src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

------------------------------------------------------
// 2. filepath: /c:/Users/ferci/ICARO-LOCAL/studyProject/client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './context/CartContext';

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById('root')
);

------------------------------------------------------
//3. filepath: /c:/Users/ferci/ICARO-LOCAL/studyProject/client/src/components/common/CardProduct/index.jsx
import React, { useContext } from 'react';
import { Card } from 'antd';
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import { CartContext } from '../../../context/CartContext';
import './cardProduct.module.css';

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
        justifyContent: "center"
      }}
      cover={<img alt={title} src={image} style={{ width: "100%", height: "auto" }} />}
    >
      <Meta title={title} description={description} style={{ textAlign: "center" }} />
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <span>
          <b>$ {price}</b>
        </span>
        <div className="icons" style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <button className="icon-with-text" style={{ display: "flex", alignItems: "center", marginRight: "10px" }} onClick={handleAddToCart}>
            <ShoppingCartOutlined style={{ fontSize: "24px", marginInline: "10px", color: "grey" }} />
            <span>Agregar al carrito</span>
          </button>
          <button className="icon-with-text" style={{ display: "flex", alignItems: "center" }}>
            <EyeOutlined style={{ fontSize: "24px", color: "grey" }} />
            <span>Ver</span>
          </button>
        </div>
      </div>
    </Card>
  );
};

------------------------------------------------------
//4. filepath: /c:/Users/ferci/ICARO-LOCAL/studyProject/client/src/components/pages/Template/Navbar/index.jsx
import React, { useState, useContext } from 'react';
import { Layout, Menu, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from '../../../context/CartContext';
import './style.css';

const { Header, Content, Footer } = Layout;

const Navbar = ({ children }) => {
  const [visible, setVisible] = useState(false);
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
              style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              onClick={showDrawer}
            >
              <ShoppingCartOutlined style={{ fontSize: "24px", marginRight: "8px" }} />
              Carrito
            </span>
            <Drawer
              title="Carrito de Compras"
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              {cartItems.length > 0 ? (
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

export default Navbar;


-----------------------------------------------
`document.getElementById` es un método del objeto `document` en JavaScript que se utiliza en el contexto del navegador para acceder a elementos del DOM (Document Object Model) por su ID. Este método es parte de la API del DOM proporcionada por los navegadores web y no está disponible en el entorno del backend (Node.js).

### Explicación de `document.getElementById`

- **`document`**: Es un objeto global en el contexto del navegador que representa el documento HTML cargado en la ventana del navegador.
- **`getElementById`**: Es un método del objeto `document` que devuelve una referencia al primer objeto con el valor del atributo `id` especificado.

### Ejemplo de uso en el frontend

Aquí tienes un ejemplo de cómo se utiliza `document.getElementById` en el frontend:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  <script>
    // Acceder al elemento con id "root"
    const rootElement = document.getElementById("root");
    console.log(rootElement); // <div id="root"></div>
  </script>
</body>
</html>
```

### Uso en React

En el contexto de una aplicación React, `document.getElementById` se utiliza comúnmente en el archivo de entrada principal (por ejemplo, 

index.jsx

) para montar la aplicación React en un elemento del DOM:

```jsx


import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root") // Montamos la aplicación en el elemento con id "root"
);
```

### Contexto del backend

En el backend (Node.js), no tienes acceso al objeto `document` ni a la API del DOM, ya que estas son características específicas del entorno del navegador. En su lugar, en el backend trabajas con módulos y APIs proporcionadas por Node.js y otros paquetes.

### Resumen

- **`document.getElementById`**: Es un método del objeto `document` en el contexto del navegador para acceder a elementos del DOM por su ID.
- **Uso en el frontend**: Se utiliza para manipular el DOM en aplicaciones web.
- **No disponible en el backend**: En el entorno del backend (Node.js), no tienes acceso al objeto `document` ni a la API del DOM.

Si tienes una función llamada `getElementaryById` en el backend, asegúrate de que esté correctamente definida y que no intente utilizar el objeto `document`, ya que esto no es posible en Node.js.

Similar code found with 2 license types