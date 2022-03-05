import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.min.css';
import {Menu} from 'antd';
import {HomeOutlined, MailOutlined, ExperimentOutlined, ReadOutlined} from '@ant-design/icons';
import {Link, useLocation, matchRoutes, useNavigate} from "react-router-dom";
import {routers} from "../../router/routers";

const { SubMenu } = Menu;

export default function SideMenu () {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [isInit, setIsInit] = useState(false);

  function handleClick(e) {
    console.log('click ', e);
    navigate(`${e.key}`)
  }

  useEffect(() => {
    const routes = matchRoutes(routers, location.pathname); // 返回匹配到的路由数组对象，每一个对象都是一个路由对象
    const pathArr: string[] = [];
    if(routes !== null) {
      routes.forEach((item) => {
        const path = item.route.path;
        if(path) {
          pathArr.push(path);
        }
      })
    }
    setSelectedKeys(pathArr);
    setIsInit(true);
  }, [location.pathname]);

  console.log('path ', selectedKeys);

  if(!isInit) {
    return null;
  }

  return (
    <Menu
      onClick={handleClick}
      defaultSelectedKeys={selectedKeys}
      defaultOpenKeys={selectedKeys}
      mode="inline"
    >
      <Menu.Item key="/home" icon={<HomeOutlined />}>
        <Link to={'/'}>Home</Link>
      </Menu.Item>

      <SubMenu key="/research" icon={<ExperimentOutlined />} title="Research">
        <Menu.Item key="/research/1">
          Research 1
        </Menu.Item>
        <Menu.Item key="/research/2">
          Research 2
        </Menu.Item>
      </SubMenu>
      <SubMenu key="/publication" icon={<ReadOutlined />} title="Publications">
        <Menu.ItemGroup title="Category 1">
          <Menu.Item key="/publication/1.1">Publication 1.1</Menu.Item>
          <Menu.Item key="/publication/1.2">Publication 1.2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Category 2">
          <Menu.Item key="/publication/2.1">Publication 2.1</Menu.Item>
          <Menu.Item key="/publication/2.2">Publication 2.2</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="/contact" icon={<MailOutlined />}>
        Contact
      </Menu.Item>
    </Menu>
  );
}
