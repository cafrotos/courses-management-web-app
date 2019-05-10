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
            <div className="title">Tiêu đề bài tập</div>
          </div>
        </div>
      </CoursesLayout>
    )
  }
}

export default withRouter(DetailLecturerExercise);
