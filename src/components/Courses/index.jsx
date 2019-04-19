import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Card, Icon, Avatar } from 'antd';
import { LINK } from '../../constants'
import './courses.less';

const { Meta } = Card;

const Cover = (props) => {
  return (
    <img alt={props.name} src={LINK.CLASS_COVER} />
  )
}

const Courses = (props) => {
  let { className, description, key } = props;
  return (
    <Layout key={key} className="courses">
      <div className="wrapper">
        <Card
          className="courses__card"
          cover={<Cover name={className} />}
        >
          <Meta
            avatar={<Avatar className="avatar" icon="solution" />}
            title={className}
            description={description}
          />
        </Card>
      </div>
    </Layout >
  )
}

export default withRouter(Courses);