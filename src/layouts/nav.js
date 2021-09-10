import React from "react"
import { Layout } from 'antd';
import { BrowserRouter as Router } from "react-router-dom";
import Headers from "./Headers"
import Section from "./Section"
import Sidebars from "./Sidebars"

const Nav = () =>{
return (
  <Router>
  <Layout>
    <Headers style={{backgroundColor:"#06c7c1"}}/>
    <Layout>
      <Sidebars className="desktop"/>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Section/>
      </Layout>
    </Layout>
  </Layout>
  </Router>
)
}
export default Nav
