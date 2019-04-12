import React from 'react';
import { Layout, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom'
import CoursesLayout from '../CoursesLayout';
import Courses from '../../components/Classes/index';
import './dashboard.less';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        {
          className: "môn 1",
          description: "nghỉ học"
        },
        {
          className: "môn 2",
          description: "nghỉ học"
        },
        {
          className: "môn 3",
          description: "nghỉ học"
        },
        {
          className: "môn 4",
          description: "nghỉ học"
        },
        {
          className: "môn 5",
          description: "nghỉ học"
        },
      ]
    }
  }

  render() {
    return (
      <CoursesLayout>
        <Layout className="dashboard">
          <Row>
            {
              this.state.classes.map((classInfo, index) => {
                return (
                  <Col span={8}><Courses key={index} {...classInfo} /></Col>
                )
              })
            }
          </Row>
        </Layout>
      </CoursesLayout>
    )
  }
}

export default withRouter(Dashboard);