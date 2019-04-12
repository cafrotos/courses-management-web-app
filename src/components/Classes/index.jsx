import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Card, Icon, Avatar } from 'antd';
import { LINK } from '../../constants'
import './classes.less';

const { Meta } = Card;

const Cover = (props) => {
  return (
    <img alt={props.name} src={LINK.CLASS_COVER} />
  )
}

const Courses = (props) => {
  let { className, description, key } = props;
  return (
    <Layout key={key} className="courses__layout">
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
    </Layout >
  )
}

export default withRouter(Courses);