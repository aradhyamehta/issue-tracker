import React from 'react';
import './App.css';
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';

function App() {
  
  return (

    <div>
    <Button type="primary">PRESS ME</Button>
    <DatePicker placeholder="select date" />
      </div>
  );
}

export default App;
