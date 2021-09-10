import React from "react"
import { Menu, Layout } from 'antd';
import { HomeOutlined,TeamOutlined,CalendarOutlined } from '@ant-design/icons';
const { Sider } = Layout;

const Sidebars = () =>{

  return (
    <>
      <div className="desktop">
      <Sider >
        <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
          {
            <>
            <Menu.Item key="1" icon={<HomeOutlined />}>Beranda</Menu.Item>
            <Menu.Item key="2" icon={<TeamOutlined />}>Personnel List</Menu.Item>
            <Menu.Item key="3" icon={<CalendarOutlined />}>Daily Attendance</Menu.Item>
            </>
          }
        </Menu>
      </Sider>
      </div>
    </>
  )
}
export default Sidebars
