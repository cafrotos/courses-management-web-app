import React from 'react';
import { Form, Input, Select, Modal, notification } from 'antd';
import { FetchUtils } from 'utils';
import './style.less'

const LABEL_FORM = {
  className: 'Tên lớp',
  description: 'Mô tả',
  room: 'Phòng'
}

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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.visible !== prevProps.visible) {
      this.setState({
        visible: !this.state.visible
      })
    }
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
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <Modal
        title="Tạo lớp mới"
        visible={this.state.visible}
        onOk={this.handleOk}
        confirmLoading={this.state.confirmLoading}
        onCancel={this.handleCancel}
        okText={"Tạo"}
        cancelText={"Hủy"}
      >
        <Form className="form__create__class">
          {
            Object.keys(LABEL_FORM).map((label, index) => {
              return (
                <Form.Item
                  label={LABEL_FORM[label]}
                  help={this.state[`${label}Err`]}
                  key={index}
                  {...formItemLayout}
                >
                  <Input onChange={this.onChangeField(label)} onBlur={this.validateField(label)} />
                </Form.Item>
              )
            })
          }
          <Form.Item
            label={'Bộ môn'}
            {...formItemLayout}
          >
            <Select onChange={this.onChangeField('moduleId')} onBlur={this.validateField('moduleId')} >
              {
                this.state.modules.map((moduleInfo, index) => {
                  return (
                    <Select.Option value={moduleInfo.id} key={index}>{moduleInfo.moduleName}</Select.Option>
                  )
                })
              }
            </Select>
            {this.state.moduleIdErr ? <span className='ant-form-explain'>{this.state.moduleIdErr}</span> : null}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default FormClass;