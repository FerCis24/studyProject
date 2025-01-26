import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/pages/Template/Navbar";
import { Home } from "./components/pages/Home";
import { Store } from "./components/pages/Store";
import { ProductPage } from "./components/pages/ProductPage";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Cart } from "./components/pages/Cart";
import { Contact } from "./components/pages/Contact";
import { CartProvider } from "./context/Cart.Contex";

function App() {
  return (
    <CartProvider>
      <Navbar>
        <Routes>
          {/* renderizado condicional*/}
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Store />} />
          <Route path="/tienda/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Navbar>
    </CartProvider>
  );
}

export default App;
