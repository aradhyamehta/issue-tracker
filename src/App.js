import React from 'react';
import './App.css';
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';

function App() {
  
  return (

    <div>
      <Input placeholder="Add issue" />
      <Button type="dashed">Create</Button>
      <Input placeholder="Read issue" />
      <Button type="dashed">Read</Button>
      <Input placeholder="Update issue" />
      <Button type="dashed">Update</Button>
      <Input placeholder="Delete issue" />
      <Button type="dashed">Delete</Button>
    </div>
  );
}

export default App;
