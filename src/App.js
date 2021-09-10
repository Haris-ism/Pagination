import React from 'react';
import Nav from './layouts/nav';
import './App.css';
import {UserProvider} from "./context/UserContext"
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <UserProvider>
        <Nav/>
      </UserProvider>
    </>
  );
}

export default App;
