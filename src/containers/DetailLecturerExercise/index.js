import React, {Component} from 'react';
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
import {withRouter} from 'react-router-dom';
import {FetchUtils} from 'utils'
import './DetailLecturerExercise.less';
import CoursesLayout from "components/CoursesLayout";

const TabPane = Tabs.TabPane;
const {TextArea} = Input;
const content = (
  <div>
    <div>
      <Button className="button-more"><Icon type="link"/><span
        style={{marginLeft: "5px"}}>Báo cáo lạm dụng</span></Button>
    </div>
  
  </div>
);

class DetailLecturerExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      visible: true
    }
  }
  
  render() {
    return (
      <CoursesLayout>
        <div className="detail-lecturer-exercise">
          <div className="content">
            <div className="date-end">Hạn 23:59, 5 thg 5</div>
            <Row>
              <Col span={10}>
                <div className="title">Tiêu đề bài tập</div>
              </Col>
              <Col span={14} style={{textAlign:"right"}}>
                <Popover placement="bottom" content={content} trigger="click" style={{backgroundColor:'#f4f9f4'}}>
                  <Button shape="circle" style={{border: "none",backgroundColor: "#f4f9f4"}}>
                    <i className="fas fa-ellipsis-v" style={{fontSize: "15px"}}></i></Button>
                </Popover>
              </Col>
            </Row>
            <div className="information"><Avatar style={{backgroundColor: '#87d068'}} icon="user"/><span
              className="user-name">Duong Nguyen</span><span className="date">9 thg 5</span></div>
            <div className="exercise-detail">
              <Row>
                <Col span={10}><span style={{fontWeight: 600}}>Bài tập của bạn</span></Col>
                <Col span={14} style={{textAlign: 'right'}}><span
                  style={{color: "rgb(46, 125, 50)"}}>Đã giao</span></Col>
              </Row>
              <div style={{color: '#7d7474'}}>Giáo viên của bạn có thể xem và chỉnh sửa các tệp mà bạn thêm hoặc tạo
              </div>
              <div className="file-test">
                <a href="">
                  <div className="name-file">test.txt</div>
                </a>
                <a className="description">Tải xuống</a>
              </div>
              <Row style={{marginTop: 20}}>
                <Col span={2} style={{textAlign: 'center'}}>
                  <Upload>
                    <Button
                      icon="paper-clip"
                      style={{cursor: "pointer", fontSize: "15px", border: "none"}}
                    >Thêm</Button>
                  </Upload>
                </Col>
                <Col span={22} style={{textAlign: 'right'}}>
                    <Button
                      type="primary"
                      style={{cursor: "pointer", fontSize: "15px", border: "none"}}
                    >Nộp</Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </CoursesLayout>
    )
  }
}

export default withRouter(DetailLecturerExercise);
