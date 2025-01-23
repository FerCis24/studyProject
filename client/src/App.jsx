import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/pages/Template/Navbar";
import { Home } from "./components/pages/Home";
import { Store } from "./components/pages/Store";
import { ProductPage } from "./components/pages/ProductPage";
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Cart } from "./components/pages/Cart"
import { Cart2 } from "./components/pages/Cart2"
import { Contact } from "./components/pages/Contact";

function App() {
  return (
    <Navbar>
      <Routes>
        {/* renderizado condicional*/}
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Store />} />
        <Route path="/tienda/:id" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/carrito" element={<Cart2 />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Navbar>
  );
}

export default App;