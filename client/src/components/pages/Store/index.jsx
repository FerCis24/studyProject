import React, { useState, useEffect } from "react";
import axios from "axios";
import { CardProduct } from "../../common/CardProduct/index.jsx";
import ErrorBoundary from "../../ErrorBoundary/index.jsx";

export const Store = () => {
  const [productos, setProductos] = useState([]);

  //BackEnd Conection
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/productos/");
      setProductos(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ErrorBoundary>
      <div className="container">
        {Array.isArray(productos) ? (
          productos.map((producto, index) => (
            <CardProduct
              key={index}
              title={producto.title}
              image={producto.image}
              description={producto.description}
              price={producto.price}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </ErrorBoundary>
  );
};
