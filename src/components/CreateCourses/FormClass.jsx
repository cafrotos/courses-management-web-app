import React from 'react';
import { Form, Input, Select, Modal, notification } from 'antd';
import { FetchUtils } from 'utils';
import './style.less'

class FormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: null,
      description: null,
      room: null,
      moduleId: null,
      visible: this.props.visible,
      confirmLoading: false,
      modules: []
    };
  }

  componentDidMount() {
    this.getModules();
  }

  getModules = async () => {
    let response = await FetchUtils.get('/modules');
    if (response.status === 200) {
      this.setState({
        modules: response
      })
    }
  }

  onChangeField = (field) => {
    if (field === 'moduleId') {
      return (value) => {
        this.setState({
          moduleId: value,
          [`${field}Err`]: null
        })
      }
    }
    else {
      return (event) => {
        this.setState({
          [field]: event.target.value,
          [`${field}Err`]: null
        })
      }
    }
  }

  validateField = (field) => {
    return () => {
      if (!this.state[field]) {
        if(field !== 'moduleId') {
          this.setState({
            [`${field}Err`]: "Chưa nhập " + LABEL_FORM[field]
          })
        }
        else this.setState({
          [`${field}Err`]: "Chưa chọn Bộ môn"
        })
      }
    }
  }

  handleOk = async () => {
    this.setState({
      confirmLoading: true,
    });
    let body = {
      className: this.state.className,
      description: this.state.description,
      moduleId: this.state.moduleId,
      room: this.state.room
    }
    let response = await FetchUtils.post('/classes', body);
    if (response.status === 200) {
      notification.success({
        message: "Tạo lớp thành công"
      })
      this.setState({
        confirmLoading: false,
        visible: false
      });
    }
    else {
      notification.error({
        message: "Tạo lớp thất bại",
        description: response.message
      })
      this.setState({
        confirmLoading: false
      })
    }
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    

    return (
      
    );
  }
}

export default FormClass;