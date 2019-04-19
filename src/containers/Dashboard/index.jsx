import React from 'react';
import { Layout, Row, Col, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import FetchUtils from 'utils/FetchUtils';
import CoursesLayout from '../../components/CoursesLayout';
import { Courses } from '../../components';
import './dashboard.less';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    }
  }

  componentDidMount() {
    this.getClasses()
  }

  getClasses = async () => {
    let response = await FetchUtils.get('/classes');
    console.log(response[0])
    this.setState({
      classes: response
    })
  }

  render() {
    return (
      <CoursesLayout>
        <Layout className="dashboard">
          <Row>
            {
              this.state.classes.map((classInfo, index) => {
                // if ()
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