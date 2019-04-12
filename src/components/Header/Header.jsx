import React from "react"
import { Layout, Row, Col, Icon } from "antd";
import "./header.less"

const { Header } = Layout;

/*export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let { toggle, collapsed } = this.props
    return (
      <Header className="header">
        <Row>
          <Col xs={11} sm={11} md={9} lg={7} xl={6} className="header__col__choosehuby" >
            <span>
              <Icon className="trigger" type={collapsed ? "menu-unfold" : "menu-fold"} onClick={toggle} />
            </span>
          </Col>
          <Col xs={0} sm={0} md={2} lg={4} xl={8} />
        </Row>
      </Header>
    );
  }
}*/

export default (props) => {
  let { toggle, collapsed } = props
  return (
    <Header className="header">
      <Row>
        <Col xs={11} sm={11} md={9} lg={7} xl={6} className="header__col__choosehuby" >
          <span>
            <Icon className="trigger" type={collapsed ? "menu-unfold" : "menu-fold"} onClick={toggle} />
          </span>
        </Col>
        <Col xs={0} sm={0} md={2} lg={4} xl={8} />
      </Row>
    </Header>
  );
}