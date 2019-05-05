import React from 'react'
import { Modal, Icon } from 'antd';
import FormClass from './FormClass'
import './style.less'

class CreateCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
    }
  }

  showModal = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <span>
        <Icon onClick={this.showModal} type="plus" className="create__class" />
        <FormClass visible={this.state.visible}/>
      </span>
    );
  }
}

export default CreateCourses