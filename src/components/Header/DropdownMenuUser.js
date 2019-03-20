import React from 'react';
import { Link } from "react-router-dom";
import { Menu, Button, Dropdown, Icon } from 'antd';
import { getItem } from '../../utils/localStorage';
import i18n from '../../utils/i18n';




const UserMenu = (onClickLogout) => {
  return (
    <Menu className="menu__user" >
      <Menu.Item className="menu__user__item" key="0">
        <Link to={`/change-info`}>
          <span className="menu__user__item__title">
            <i className="fas fa-user" />
            <span>{i18n.t('user_action.edit_profile')}</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item disabled className="menu__user__item" key="1">
        <Link to="#">
          <span className="menu__user__item__title">
            <i className="fas fa-wrench" />
            <span>{i18n.t('user_action.notification')}</span>
          </span>
        </Link>
      </Menu.Item>
      <Menu.Item className="menu__user__item" key="3" onClick={onClickLogout}>
        <Link to="#" >
          <span className="menu__user__item__title">
            <i className="fas fa-beer" />
            <span>{i18n.t('user_action.logout')}</span>
          </span>
        </Link>
      </Menu.Item>
    </Menu>
  )
}

class DropdownMenuUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdown: true
    };
  }

  handleClick = () => {
    this.setState({
      isDropdown: !this.state.isDropdown
    })
  };

  handleBlur = () => {
    this.setState({
      isDropdown: true
    })
  };

  userLogout = () => {
    this.props.handleLogout();
  };

  render() {
    const username = getItem('username');
    return (
      <Dropdown
        overlay={UserMenu(this.userLogout)}
        trigger={['click']}
      >
        <Button className="header__button__user" onClick={this.handleClick} onBlur={this.handleBlur}>
          <strong>{username}</strong>
          <Icon type={this.state.isDropdown ? 'down' : 'up'} className="icon__arrow icon__arrow__user" />
        </Button>
      </Dropdown>
    )
  }
}

export default DropdownMenuUser;