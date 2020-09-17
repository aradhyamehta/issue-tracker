import React from 'react';
import './App.css';
import { Button, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined, DeleteTwoTone } from '@ant-design/icons';

function App() {
  
  return (

    <div>
      <Row>
    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
    <Input placeholder="Add issue" />
      <Button type="dashed">Create</Button>
      <SearchOutlined style={{ fontSize: "30px" }} />
    </Col>
    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
    <Input placeholder="Read issue" />
      <Button type="dashed">Read</Button>
    </Col>
    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
    <Input placeholder="Update issue" />
      <Button type="dashed">Update</Button>
    </Col>
    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
    <Input placeholder="Delete issue" />
      <Button type="dashed">Delete</Button>
      <DeleteTwoTone style={{ fontSize: "30px" }} />
    </Col>
  </Row>
    </div>
  );
}

export default App;
