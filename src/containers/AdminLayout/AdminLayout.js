import React from 'react';
import { Layout } from 'antd';
import { Footer, Header, Sider } from '../../components';
import { withRouter } from 'react-router-dom';
import { LIST_MENU } from '../../constants';
import history from '../../history';
const { Content } = Layout;


class AdminLayout extends React.Component {

  constructor(props) {
    super(props);
    let innerWidth = this.getInnerWidth();
    this.state = {
      collapsed: innerWidth > 1025 ? false : true,
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

  // componentWillUnmount = () => {
  //   window.removeEventListener('resize', this.updateDimensions);
  // }

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
        return menu.id ;
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

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      openKeys: ['']
    });
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


  getCurentRoute = () => {
    const pathname = this.props.location.pathname;
    return pathname.trim().slice(1).split('/');
  };

  render() {
    return (
      <Layout>
        <Sider
          collapsed={this.state.collapsed}
          openKeys={this.state.openKeys}
          openChangeSubmenu={this.openChangeSubmenu}
          activeLink={this.state.activeLink}
        />
        <Layout>
          <Header toggle={this.toggle} collapsed={this.state.collapsed} {...this.props} />
          <Content>
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(AdminLayout)
