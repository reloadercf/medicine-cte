import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';

import Headerdiv from '../autenticate/Headerdiv';
import Footerdiv from '../autenticate/Footerdiv';
import WelcomeSinging from '../autenticate/WelcomeSinging';

const { Content } = Layout;

const Autenticate = () => (
  <div>
    <Layout className="layout" style={{ height: '100%' }}>
      <Headerdiv />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Bienvenida</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content" style={{ height: '100%' }}>
          <Switch>
            <Route exact path="/"><WelcomeSinging /></Route>
          </Switch>
        </div>
      </Content>
      <Footerdiv />
    </Layout>
  </div>
);

export default Autenticate;
