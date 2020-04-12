import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './index.css';
import { connect, history } from 'umi';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function withMenu(WrappedComponent: React.FC) {
  class SiderDemo extends React.Component {
    constructor(props) {
      super(props)
      if(!props.isLogin){
        history.replace("./login")
      }
    }
    state = {
      collapsed: false,
    };

    onCollapse = (collapsed: Boolean) => {
      console.log(collapsed);
      this.setState({ collapsed });
    };

    render() {
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <PieChartOutlined />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <DesktopOutlined />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <UserOutlined />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <TeamOutlined />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <FileOutlined />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ padding: '0px 24px', textAlign: 'right' }}
            >
              <Avatar
                style={{
                  backgroundColor: 'rgba(0,0,0,0.65)',
                  verticalAlign: 'middle',
                }}
                size="large"
              >
                {'111'}
              </Avatar>
            </Header>
            <Content>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360, height: '100%' }}
              >
                <WrappedComponent {...this.props} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      );
    }
  }
  return connect(({ login }) => ({
    login,
  }))(SiderDemo);
}
export default withMenu;
