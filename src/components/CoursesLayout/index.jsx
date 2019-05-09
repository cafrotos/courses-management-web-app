import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter, Link } from 'react-router-dom'
import { LogoImg } from 'assets'
import history from '../../history';
import { Header } from '..'
import { LIST_MENU } from '../../constants';
import './coursesLayout.less'

const { Sider } = Layout;

class CoursesLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      openKeys: this.getActiveSubmenu(),
      activeLink: this.getActiveLink(props.location.pathname)
    };
  }
  rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];

  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions);
    window.addEventListener('popState', () => history.go(-1));
    this.getActiveSubmenu();
  }

  getActiveSubmenu = () => {
    let currRoute = this.getCurentRoute();
    const subMenuName = '/' + currRoute[0];
    if (subMenuName) {
      const subMenu = LIST_MENU.find(item => item.key === subMenuName);
      if (subMenu) return subMenu.id;
      return [''];
    }
  }

  getActiveLink = (pathname) => {
    if (!pathname || pathname === '/') {
      return ['0'];
    }
    let currRoute = this.getCurentRoute();
    const key = '/' + currRoute[0];
    const menu = LIST_MENU.find(item => item.key === key);
    if (menu) {
      const subMenu = menu.subMenu.find(item => item.route === pathname);
      if (subMenu) {
        return subMenu.id
      } else {
        return menu.id;
      }
    } else return [''];
  }

  updateDimensions = () => {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width <= 800) {
      this.setState({
        collapsed: true,
      })
    }
  }

  getInnerWidth = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  getCurentRoute = () => {
    const pathname = this.props.location.pathname;
    return pathname.trim().slice(1).split('/');
  };

  openChangeSubmenu = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      openKeys: ['']
    });
  };

  render() {
    return (
      <Layout className="courses__layout">
        <Sider
          className="courses__sider"
          collapsed={this.state.collapsed}
          openKeys={this.state.openKeys}
          openChangeSubmenu={this.openChangeSubmenu}
          activeLink={this.state.activeLink}
          theme='light'
        >
          <Menu className="courses__menu" theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <div className="logo">
              <img src={LogoImg} alt="" />
            </div>
            {
              LIST_MENU.map((menu, index) => {
                return (
                  <Menu.Item key={index}>
                    <Link to={'/dashboard'}>
                      <Icon type={menu.icon} />
                      <span>{menu.name}</span>
                    </Link>
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Sider>
        <Layout>
          <Header toggle={this.toggle} collapsed={this.state.collapsed} {...this.props} />
          <span className="children__layout">
            {this.props.children}
          </span>
        </Layout>
      </Layout>
    );
  }
}


export default withRouter(CoursesLayout)