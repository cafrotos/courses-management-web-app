import React from "react"
import { Layout, Row, Col, Input, Icon } from "antd";
import MenuUser from './MenuUser'
import "./header.less"
import { CreateCourses } from "..";

const { Header } = Layout;
const SECTION = localStorage.getItem('section');

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
          {SECTION === "LECTURER" ? (<CreateCourses />) : null}
          <span>
            <MenuUser />
          </span>
        </Col>
      </Row>
    </Header>
  );
} 