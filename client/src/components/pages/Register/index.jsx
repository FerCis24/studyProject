import React, { useState } from 'react';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from 'antd';

const { Option } = Select;

const residences = [
  {
    value: 'arg',
    label: 'Argentina',
    children: [
      {
        value: 'cba',
        label: 'Córdoba',
        children: [
          {
            value: 'cba-cap',
            label: 'Córdoba Capital',
          },
          {
            value: 'r4',
            label: 'Rio Cuarto',
          },
          {
            value: 'vm',
            label: 'Villa María',
          },
          {
            value: 'sf',
            label: 'San Francisco',
          },
        ],
      },
      {
        value: 'sfe-p',
        label: 'Santa Fe',
        children: [
          {
            value: 'sfe',
            label: 'Santa Fe',
          },
          {
            value: 'rosario',
            label: 'Rosario',
          },
          {
            value: 'rafaela',
            label: 'Rafaela',
          },
        ],
      },
    ],
  },
  {
    value: 'ur',
    label: 'Uruguay',
    children: [
      {
        value: 'mvd-d',
        label: 'Montevideo',
        children: [
          {
            value: 'mvd',
            label: 'Montevideo',
          },
        ],
      },
      {
        value: 'maldonado',
        label: 'Maldonado',
        children: [
          {
            value: 'ptaDelEste',
            label: 'Punta del Este',
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="54">+54</Option>
        <Option value="598">+598</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['arg', 'cba', 'cba-cap'],
        prefix: '54',
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'El E-mail ingresado no es válido!',
          },
          {
            required: true,
            message: 'Por favor, ingresa tu e-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Contraseña"
        rules={[
          {
            required: true,
            message: 'Por favor, ingresa tu contraseña!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirmar Contraseña"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor, confirma tu contraseña',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('La nueva contraseña que ingresaste no coincide!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="userName"
        label="Nombre de Usuario"
        tooltip="Que nombre de usuario quieres usar?"
        rules={[
          {
            required: true,
            message: 'Por favor, ingresa tu nombre de usuario!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Dirección"
        rules={[
          {
            type: 'array',
            required: true,
            message: 'Por fabor, ingresa tu domicilio!',
          },
        ]}
      >
        <Cascader options={residences} />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Número de teléfono"
        rules={[
          {
            required: true,
            message: 'Por favor, ingresa tu número de teléfono!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="intro"
        label="Datos adicionales"
        rules={[
          {
            required: true,
            message: 'Aquí puedes ingresar datos adicionales',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Género"
        rules={[
          {
            required: true,
            message: 'Selecciona un género',
          },
        ]}
      >
        <Select placeholder="selecciona tu género">
          <Option value="male">Masculino</Option>
          <Option value="female">Femenino</Option>
          <Option value="other">Otro</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Captcha" extra="Debemos verificar que sos un humano.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Por favor, ingresa el captcha que obtuviste!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Button>Obtener captcha</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Debes aceptar los términos y condiciones')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          He leído los <a href="">términos y condiciones</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Registrarse
        </Button>
      </Form.Item>
    </Form>
  );
};
