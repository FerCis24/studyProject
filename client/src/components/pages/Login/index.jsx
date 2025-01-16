import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

	const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:3000/usuarios/login', values)
      console.log('Received values of form: ', response.data);
      // Redirigiendo al usuario a la página de inicio o a otra página si el login exitoso
      navigate('/carrito') //VER A DÓNDE LO ENVÍO
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      //TENGO QUE VER COMO MANEJO ESTE ERROR
    }
  };

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>
          <a href="">Recuperar contraseña</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        ó <Link to="/registro">Registrarme ahora!</Link>
      </Form.Item>
    </Form>
  );
}

