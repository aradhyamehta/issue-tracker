import React from 'react';
import './App.css';
import { Button, DatePicker } from 'antd';
import { Layout, Breadcrumb, Typography } from 'antd';
import 'antd/dist/antd.css';

function App() {
  
  const { Content, Footer } = Layout;
  const { Text } = Typography;
  return (

    <div>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
    <Layout className="layout">
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
      </div>
  );
}

export default App;
