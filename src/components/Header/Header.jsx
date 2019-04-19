import React from "react"
import { Layout, Row, Col, Input, Tooltip, Icon } from "antd";
import MenuUser from './MenuUser'
import "./header.less"

const { Header } = Layout;

export default (props) => {
  let { toggle, collapsed } = props
  return (
    <Header className="header">
      <Row align="bottom">
        <Col span={6} className="header__title__left">
          <Icon type={collapsed ? "menu-unfold" : "menu-fold"} onClick={toggle} />
          <span className="title">
            Quản lý môn học
          </span>
        </Col>
        {/* <Col span={3} style={{height: '', backgroundColor: 'red'}}></Col>
        <Col span={3} style={{height: '', backgroundColor: 'green'}}></Col>
        <Col span={3} style={{height: '', backgroundColor: 'blue'}}></Col> */}
        <Col span={8} className="header__title__right">
          <Input 
            className="header__search"
            placeholder="Tìm kiếm lớp"
            prefix={<Icon type="search" />}
          />
          <Icon type="plus" className="create__class" />
          <span>
            <MenuUser />
          </span>
        </Col>
      </Row>
    </Header>
  );
} 