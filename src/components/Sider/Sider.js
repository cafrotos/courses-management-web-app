import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './styles.less';
import { logo1, logo2, LIST_MENU } from '../../constants';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    let innerWidth = this.getInnerWidth();
    this.state = {
      siderCollapsedWith: innerWidth > 768? 60 : 0
    }

  }

  onOpenChange = (openKeys) => {
    this.props.openChangeSubmenu(openKeys)
  }

  getInnerWidth = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  getMenuItem = (menu, index) => {
    const { route, icon, name, id, subMenu, disabled } = menu;
    if (menu.subMenu.length === 0) {
      return (
        <Menu.Item
          key={index}
          disabled={disabled}
        >
          <Link disabled={disabled} to={route}>
            <i className={icon} />
            <span className={`sider__link--white link-${disabled ? 'disabled' : ''}`}>
              {name}
            </span>
          </Link>
        </Menu.Item>
      )
    } else {
      return (
        <SubMenu
          className={`treeview-menu ${subMenu.length > 0 ? '' : 'hidden-arrow'}`}
          key={id}
          disabled={disabled}
          title={
            <span>
              <i className={icon} />
              <span className="sider__link--white">
                {name}
              </span>
            </span>
          }
        >
          {
            subMenu.map(sub => (
              <Menu.Item key={sub.id} disabled={sub.disabled}>
                <Link className="sider__link--white" to={sub.route}>
                  <span>
                    <Icon type="plus" />
                    {sub.name}
                  </span>
                </Link>
              </Menu.Item>
            ))
          }
        </SubMenu>
      )
    }
  }

  render() {
    let { collapsed, activeLink } = this.props;
    return (
      <Sider
        className="sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={200}
        collapsedWidth={this.state.siderCollapsedWith}
      >
        <Link to="/">
          <div className="logo">
            {/*<img src={collapsed ? logo1 : logo2} alt="Panda" />*/}
          </div>
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          inlineIndent="25"
          inlineCollapsed="false"
          openKeys={this.props.openKeys}
          onOpenChange={this.onOpenChange}
          defaultSelectedKeys={activeLink}
        >
          {
            LIST_MENU.map((menu, index) => this.getMenuItem(menu, index))
          }
        </Menu>
      </Sider >
    )
  }
}

