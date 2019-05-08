import React, {Component} from 'react';
import {Row, Col, Tabs, Input, Divider, Button, Icon, Upload, message, Popover, Card, Avatar,} from 'antd';
import {withRouter} from 'react-router-dom';
import './courseDetail.less';
import {CSSTransitionGroup} from 'react-transition-group' // ES6
import CoursesLayout from '../../components/CoursesLayout';

const TabPane = Tabs.TabPane;
const {Meta} = Card;
const {TextArea} = Input;
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const content = (
  <div>
    <div style={{}}>
      <Button className="button-more"><Icon type="link"/><span
        style={{marginLeft: "5px"}}>Sao chép liên kết</span></Button>
    </div>
    <div>
      <Button className="button-more"><Icon type="edit"/><span
        style={{marginLeft: "5px"}}>Chỉnh sửa</span></Button>
    </div>
    <div>
      <Button className="button-more"><Icon type="delete"/><span style={{marginLeft: "5px"}}>Xóa</span></Button>
    </div>
  </div>
);
const data = {
  className: "Toán rời rạc",
  detailClass: "Môn học cung cấp cho sinh viên kiến thức tổng quát về toán rời rạc",
  imageHeader: "https://lh3.googleusercontent.com/6FnCDvzCtskO_ReqBUEU1HrBncCKNY4-iBQ4WGwZrxFRWbzwabgk_PMUsa2s1_Ola5cN3NeFph_V89rRUg=w960-h334-no",
  expiredExercise: [
    {
      id: 1,
      timeDescription: "Bài tập đến hạn vào ngày mai",
      exercise: [
        {
          id: 1,
          name: "Bài tập chương 1",
          expriedTime: "23:59"
        },
        {
          id: 2,
          name: "Bài tập chương 2",
          expriedTime: "23:59"
        },
        {
          id: 3,
          name: "Bài tập chương 3",
          expriedTime: "23:59"
        }
      ]
    },
    {
      id: 2,
      timeDescription: "Bài tập đến hạn vào ngày kia",
      exercise: [
        {
          id: 1,
          name: "Bài tập chương 1",
          expriedTime: "23:59"
        },
        {
          id: 2,
          name: "Bài tập chương 2",
          expriedTime: "23:59"
        },
        {
          id: 3,
          name: "Bài tập chương 3",
          expriedTime: "23:59"
        }
      ]
    },
    {
      id: 3,
      timeDescription: "Bài tập đến hạn vào ngày mai",
      exercise: [
        {
          id: 1,
          name: "Bài tập chương 1",
          expriedTime: "23:59"
        },
        {
          id: 2,
          name: "Bài tập chương 2",
          expriedTime: "23:59"
        },
        {
          id: 3,
          name: "Bài tập chương 3",
          expriedTime: "23:59"
        }
      ]
    },
    {
      id: 4,
      timeDescription: "Bài tập đến hạn vào ngày mai",
      exercise: [
        {
          id: 1,
          name: "Bài tập chương 1",
          expriedTime: "23:59"
        },
        {
          id: 2,
          name: "Bài tập chương 2",
          expriedTime: "23:59"
        },
        {
          id: 3,
          name: "Bài tập chương 3",
          expriedTime: "23:59"
        }
      ]
    }
  ]
};

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      items: ['hello', 'world', 'click', 'me']
    };
    this.handleAdd = this.handleAdd.bind(this)
  }
  
  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }
  
  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }
  
  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));
    const {active} = this.state;
    console.log("activeeeeeeeeeee=>>>>>>>>", active);
    return (
      <CoursesLayout>
        
        <Row className="course-detail">
          <Tabs defaultActiveKey="1" size="large">
            <TabPane tab={<span><Icon type="apple"/>Luồng</span>} key="1">
              <Row className="row-header">
                <div className="header-course-detail">
                  <div className="background-image">
                    <div className="background-color"/>
                    <div className="className">{data.className}</div>
                    <div className="classDetail">{data.detailClass}</div>
                  </div>
                </div>
              </Row>
              <Row className="row-body">
                <Col span={6}>
                  <div className="expired-time">
                    <div className="title">Sắp đến hạn</div>
                    <div>
                      {
                        data.expiredExercise.map((element, index) => {
                          return <div key={index} className="expired-block">
                            <span
                              className="description-day">{element.timeDescription}</span>
                            <div>
                              {
                                element.exercise.map((excrise, index) => {
                                  return <div>
                                    <a>{excrise.expriedTime} – {excrise.name}</a>
                                  </div>
                                })
                                
                              }
                            </div>
                          </div>
                        })
                      }
                      
                      
                      <div>
                        <a>Xem tất cả</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col span={18}>
                  
                  <div className={active ? "content-post" : "hidden-content-post"}>
                    {active ? <>
                        <div className="title">Tạo bài viết</div>
                        <div className="text-area">
                          <TextArea autoFocus={true} placeholder="Chia sẻ với lớp học của bạn"
                                    autosize={{minRows: 6, maxRows: 12}}/>
                        </div>
                        <Divider/>
                        <Row>
                          <Col span={15}> <Upload {...props}>
                            <Button icon="paper-clip" shape="circle"
                                    style={{cursor: "pointer", fontSize: "18px"}}/></Upload></Col>
                          <Col span={9} style={{textAlign: 'right'}}>
                            <Button onClick={() => {
                              this.setState({active: false});
                              console.log(active)
                            }}>Hủy</Button>
                            <Button
                              style={{marginLeft: 8}}
                              type="primary">Đăng
                              bài</Button></Col>
                        </Row>
                      </> :
                      <Row onClick={() => this.setState({active: true})}>
                        <Col span={1}><Avatar style={{backgroundColor: '#87d068'}} icon="user" size="large"/></Col>
                        <Col span={23}>
                          <p className="title">Chia sẻ đôi điều với lớp học...</p>
                        </Col>
                      </Row>
                    }
                  </div>
                  
                  <Card className="post" style={{marginTop: 16}} bordered={true} loading={false}>
                    <Row className="row-infor">
                      <Col span={1}><Avatar style={{backgroundColor: '#87d068'}} icon="user" size="large"/></Col>
                      <Col span={21} style={{paddingLeft: "12px"}}>
                        <div className="username-post">Dương Nguyễn</div>
                        <div className="time-post">26 thg 4</div>
                      </Col>
                      <Col className="col-popover" span={2} style={{textAlign: "right"}}>
                        
                        <Popover placement="bottom" content={content} trigger="click">
                          <Button shape="circle" style={{border: "none"}}>
                            <i className="fas fa-ellipsis-v" style={{fontSize: "15px"}}></i></Button>
                        </Popover>
                      
                      </Col>
                    </Row>
                    <Row>
                      <div className="status"> Các em nhớ làm bài nhé!</div>
                      <a className="file-test">
                        <div className="name-file">test.txt</div>
                        <div className="description">Tải xuống</div>
                      </a>
                    
                    </Row>
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab={<span><Icon type="android"/>Bài tập trên lớp</span>} key="2">
              Bài tập trên lớp
            </TabPane>
            <TabPane tab={<span><Icon type="android"/>Mọi người</span>} key="3">
              Bài tập trên lớp
            </TabPane>
          </Tabs>
        </Row>
      </CoursesLayout>
    )
  }
}

export default withRouter(CourseDetail);
