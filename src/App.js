import React from 'react';
import './App.css';
import { Button, DatePicker, Input } from 'antd';
import 'antd/dist/antd.css';

function App() {
  
  return (

    <div>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
    <Input placeholder="Basic usage" />
    <Button type="dashed">Dashed Button</Button>
      </div>
  );
}

export default App;
