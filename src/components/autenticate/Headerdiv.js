/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Headerdiv = () => (
  <Fragment>
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Inicio</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/active">Residentes</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/register">Registrar</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/archive">Archivado</Link></Menu.Item>
      </Menu>
    </Header>
  </Fragment>
);

export default Headerdiv;
