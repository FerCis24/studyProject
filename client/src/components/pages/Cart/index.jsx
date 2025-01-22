import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Checkout = () => {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      const responde = await axios.post("http://localhost:3000/checkout");
      console.log(Response.data);
      //REDIRIGIENDO A LA PÁGINA DE CONFIRMACIÓN DE COMPRA
      navigate("/confirmation");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        //REDIRIGIENDO A LA PÁGINA DE LOGIN SI NO ESTÁ LOGUEADO
        navigate("/login");
      } else {
        console.error("Error al finalizar la compra:", error);
      }
    }
  };

	return (
		<div>
			<h1>
				<ShoppingCartOutlined />
				Checkout
			</h1>
			<button onClick={handleCheckout}>Finalizar Compra</button>
		</div>
	);
};

