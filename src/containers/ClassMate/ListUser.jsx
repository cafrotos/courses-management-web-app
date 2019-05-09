import React from 'react';
import { Table, Row, Col, Button } from 'antd'

const Layout = (props) => {
  const { data, title } = props

  const column = [
    {
      title,
      dataIndex: 'name',
      key: 'name',
      render: name => {
        return (
          <Row gutter={16}>
            <Col span={1}>
              <Button style={{ float: "right" }} type="primary" shape="circle" icon="user" />
            </Col>
            <Col span={22} style={{ paddingTop: "5px" }}>
              {name}
            </Col>
          </Row>
        )
      }
    }
  ]

  return (
    <div>
      <Table columns={column} dataSource={data} pagination={false} />
    </div>
  )
}

export default Layout