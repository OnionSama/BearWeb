import React from 'react';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import SideMenu from "./SideMenu";
import { Outlet } from 'react-router-dom';

const { Sider, Content } = Layout;

export default function AppLayout() {
    return (
      <Layout className="app_main" style={{minHeight: '100vh'}}>
        <Sider collapsible>
          <SideMenu/>
        </Sider>
        <Layout className="app_main">
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
}
