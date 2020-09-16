import React from 'react';
import './App.css';
import { Button, DatePicker } from 'antd';
import { Layout, Breadcrumb, Menu, Typography } from 'antd';
import 'antd/dist/antd.css';

function App() {
  
  const { Header, Content, Footer } = Layout;
  const { Text } = Typography;
  return (

    <div>
    <Layout className="layout">
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
      <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
    <Text code>BugFree is a software development tool to view & store all your programming issues.</Text>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
      </div>
  );
}

export default App;
