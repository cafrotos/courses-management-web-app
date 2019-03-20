import React, { Component } from 'react';
import { BreadCrumb } from '../../components';
import AdminLayout from '../AdminLayout/AdminLayout';



export default class SystemConfig extends Component {

  getCurentRoute = () => {
    const pathname = this.props.location.pathname;
    return pathname.trim().slice(1).split('/');
  };

  render() {
    const currentRoute =  this.getCurentRoute()
    return (
      <AdminLayout>
        <BreadCrumb currentRoute={currentRoute}/>
        <h1>System</h1>
      </AdminLayout>
    )
  }
}