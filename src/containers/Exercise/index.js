import React, { Component } from 'react';
import {
  Row,
  Col,
  Tabs,
  Input,
  Divider,
  InputNumber,
  Modal,
  Button,
  Icon,
  DatePicker,
  Upload,
  notification,
  Popover,
  Card,
  Avatar
} from 'antd';
import { withRouter } from 'react-router-dom';
import { FetchUtils } from 'utils'
import './Exercise.less';

const TabPane = Tabs.TabPane;
const { TextArea } = Input;

const content = (
  <div>
    <div style={{}}>
      <Button className="button-more"><Icon type="link" /><span
        style={{ marginLeft: "5px" }}>Sao chép liên kết</span></Button>
    </div>
    <div>
      <Button className="button-more"><Icon type="edit" /><span
        style={{ marginLeft: "5px" }}>Chỉnh sửa</span></Button>
    </div>
    <div>
      <Button className="button-more"><Icon type="delete" /><span style={{ marginLeft: "5px" }}>Xóa</span></Button>
    </div>
  </div>
);

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      exercises: []
    }
  }

  componentDidMount() {
    this.fetchExercises()
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  onChangeInputNumber = (value) => {
    console.log("helloooooooo", value);
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  }

  fetchExercises = async () => {
    let coursesPath = window.location.pathname;
    let exercises = await FetchUtils.get(`/exercises/${coursesPath}`);
    if (exercises.status === 200) {
      this.setState({
        exercises: exercises
      })
    }
  }

  render() {
    const { visible, loading, exercises } = this.state;
    return (
      <div className="exercise">
        <Row className="row-header">
          <Col>
            <Button onClick={this.showModal} type="primary" className="create-button"><i style={{ fontSize: 17 }}
              className="fas fa-plus"></i><span
                style={{ marginLeft: 10, fontSize: 18 }}>Tạo bài tập</span></Button>
            <Modal
              visible={visible}
              title="Bài tập"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Row>
                  <Col span={10} style={{ textAlign: 'left' }}>
                    <Upload>
                      <Button
                        icon="paper-clip"
                        shape="circle"
                        style={{ cursor: "pointer", fontSize: "18px" }}
                      />
                    </Upload>
                  </Col>
                  <Col span={14} style={{ textAlign: 'right' }}>
                    <Button key="back" onClick={this.handleCancel}>Hủy</Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                      Tạo
                    </Button>
                  </Col>
                </Row>

              ]}
            >
              {/* <Row>
                <TextArea placeholder="Tiêu đề" style={{ marginBottom: 20 }} autosize={{ minRows: 1, maxRows: 6 }} />
              </Row> */}
              <Row>
                <TextArea placeholder="Đề bài" style={{ marginBottom: 20 }}
                  autosize={{ minRows: 4, maxRows: 6 }} />
              </Row>
              <Row>
                <Col span={5}>
                  <div><span style={{ marginRight: 5 }}>Điểm:</span><InputNumber min={0} max={100} defaultValue={3}
                    onChange={this.onChangeInputNumber} />
                  </div>
                </Col>
                <Col span={10} offset={1}>
                  <div><span style={{ marginRight: 5 }}>Đến hạn:</span><DatePicker placeholder="Ngày hết hạn"
                    format="DD/MM/YYYY" /></div>
                </Col>
                <Col span={19}>
                </Col>
              </Row>
            </Modal>
          </Col>
        </Row>
        <Row className="row-body">
          {
            exercises && exercises.map(exercise => {
              return (
                <Row className="element-exercise" key={exercise.id}>
                  <Col span={2} style={{ textAlign: "center" }}>
                    <Avatar style={{ backgroundColor: "#e8710a" }} size="large">
                      <i style={{ fontSize: 17 }} className="far fa-file-alt"></i>
                    </Avatar>
                  </Col>
                  <Col span={7} style={{ textAlign: 'left' }}>
                    <div>{`Bài tập số ${exercise.id}`}</div>
                    <div>{`Hạn ${new Date(exercise.exprisedAt).toLocaleDateString()}`}</div>
                  </Col>
                  <Col span={9} offset={5}>
                    <div style={{ lineHeight: "40px" }}>{`Đã đăng vào ${new Date(exercise.createdAt).toLocaleDateString()}`}</div>
                  </Col>
                  <Col span={1}>
                    <div style={{ lineHeight: "40px" }}>
                      <Popover placement="bottom" content={content} trigger="click">
                        <Button shape="circle" style={{ border: "none" }}>
                          <i className="fas fa-ellipsis-v" style={{ fontSize: "15px" }}></i></Button>
                      </Popover>
                    </div>

                  </Col>
                </Row>
              )
            })
          }
        </Row>
      </div>
    )
  }
}

export default withRouter(Exercise);
