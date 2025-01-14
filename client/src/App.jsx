import "./App.css";
import { ListProduct } from "./components/common/ListProduct";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/pages/Template/Navbar";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { ProductPage } from "./components/pages/ProductPage";

function App() {
  return (
    <Navbar>
      <Routes>
        {/* renderizado condicional*/}
        <Route path="/inicio" element={<Home />} />
        <Route path="/tienda" element={<ListProduct />} />
        <Route path="/producto" element={<ProductPage />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Navbar>
  );
}

export default App;
