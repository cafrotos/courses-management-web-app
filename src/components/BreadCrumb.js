import React from 'react';
import { Breadcrumb } from 'antd';
import i18n from '../utils/i18n';


export default class extends React.Component {

  getBreadcrumd = (item, index) => {

    if (Number(item)) {
      return (
        <Breadcrumb.Item key={index}>
          <span>{item}</span>
        </Breadcrumb.Item>
      )
    } else {
      return (
        <Breadcrumb.Item key={index}>
          <span>{i18n.t(`breadcrumb.${item}`)}</span>
        </Breadcrumb.Item>
      )
    }
  }

  render() {
    const { currentRoute } = this.props
    return (
      <Breadcrumb style={{ margin: '5px 20px', fontFamily: 'Roboto', textTransform: 'capitalize' }}>
        <Breadcrumb.Item>{i18n.t('breadcrumb.home')}</Breadcrumb.Item>
        {
          currentRoute.map((item, index) => this.getBreadcrumd(item,index))
        }
      </Breadcrumb>
    )
  }
}

