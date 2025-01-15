//LIBRERIA DE COMPONENTES ant Design → VER → CLASE 50 → h:m=1:20
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const CardViewProduct = () => {
  const [product, setProduct] = useState({}); /*objeto vacio{} ó arreglo vacío [] */

  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3000/productos/1");
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Card
      title={product.title}
      hoverable
      style={{ width: 300 }}
      cover={<img alt={product.title} src={product.image} />}
      actions={[
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
        <SettingOutlined key="setting" />,
      ]}>
      <Card.Meta title={product.title} description={product.description} />
    </Card>
  );
};
