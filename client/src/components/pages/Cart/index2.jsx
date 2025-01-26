import React, { useState, useContext } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import { CartContext } from '../../../context/Cart.Contex.jsx';

export const Cart2 = () => {
  const { cartItems } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');

  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </Drawer>
    </>
  );
};