import React from 'react';
import 'antd/dist/antd.min.css';
import './HeadMenu.css';
import { Menu } from 'antd';
import { HomeOutlined, MailOutlined, ExperimentOutlined, ReadOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class HeadMenu extends React.Component {

  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>

        <SubMenu key="research" icon={<ExperimentOutlined />} title="Research">
          <Menu.Item key="research1">
            Research 1
          </Menu.Item>
          <Menu.Item key="research2">
            Research 2
          </Menu.Item>
        </SubMenu>
        <SubMenu key="publications" icon={<ReadOutlined />} title="Publications">
          <Menu.ItemGroup title="Category 1">
            <Menu.Item key="publication:1.1">Publication 1.1</Menu.Item>
            <Menu.Item key="publication:1.2">Publication 1.2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Category 2">
            <Menu.Item key="publication:2.1">Publication 2.1</Menu.Item>
            <Menu.Item key="publication:2.2">Publication 2.2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="contactme" icon={<MailOutlined />}>
          Contact Me
        </Menu.Item>
      </Menu>
    );
  }
}

export default HeadMenu;
