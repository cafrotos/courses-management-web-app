import React, { Component } from 'react';
import { Row, Col, Tabs, Input, Divider, Button, Icon, Upload, notification, Popover, Card, Avatar } from 'antd';
import { withRouter } from 'react-router-dom';
import { CoursesLayout } from 'components';
import { FetchUtils } from 'utils'
import './courseDetail.less';
import Exercise from "../Exercise";

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
      contentPost: '',
      formData: new FormData(),
      posts: [],
      loading:false
    }
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = async () => {
    let path = window.location.pathname;
    let result = await FetchUtils.get(`/posts/${path}`);
    this.setState({
      posts: result
    })
  };

  customRequest = async (info) => {
    if (!this.state.formData) {
      this.setState({
        formData: new FormData()
      })
    }
    let data = this.state.formData;
    data.append('files', info.file);
    this.setState({
      formData: data
    })
  };

  onChangeContent = (event) => {
    this.setState({
      contentPost: event.target.value
    })
  };

  onSubmit = async () => {
    this.setState({loading:true})
    let body = this.state.formData;
    body.append("content", this.state.contentPost)
    let response = await FetchUtils.post(`/posts${window.location.pathname}`, body, true);
    if (response.status === 200) {
      notification.success({
        message: "Tạo bài chia sẻ thành công!"
      });
      this.setState({
        loading:false,
        contentPost:'',
        formData: new FormData()
      });
      this.fetchPosts();
    }
  };

  render() {
    const { active, posts,loading } = this.state;
    return (
      <CoursesLayout>

        <Row className="course-detail">
          <Tabs defaultActiveKey="2" size="large">
            <TabPane tab={<span><Icon type="apple" />Luồng</span>} key="1">
              <Row className="row-header">
                <div className="header-course-detail">
                  <div className="background-image">
                    <div className="background-color" />
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
                                element.exercise&&element.exercise.map((excrise, index) => {
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
                    {active ?
                      <>
                        <div className="title">Tạo bài viết</div>
                        <div className="text-area">
                          <TextArea
                            autoFocus
                            value={this.state.contentPost}
                            placeholder="Chia sẻ với lớp học của bạn"
                            autosize={{ minRows: 6, maxRows: 12 }}
                            onChange={this.onChangeContent}
                          />
                        </div>
                        <Divider />
                        <Row>
                          <Col span={15}>
                            <Upload customRequest={this.customRequest}>
                              <Button
                                icon="paper-clip"
                                shape="circle"
                                style={{ cursor: "pointer", fontSize: "18px" }}
                              />
                            </Upload>
                          </Col>
                          <Col span={9} style={{ textAlign: 'right' }}>
                            <Button onClick={() => {
                              this.setState({ active: false });
                            }}>Hủy</Button>
                            <Button style={{ marginLeft: 8 }} type="primary" onClick={this.onSubmit} loading={loading}>
                              Đăng bài
                        </Button>
                          </Col>
                        </Row>
                      </> :
                      <Row onClick={() => this.setState({ active: true })}>
                        <Col span={2}><Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="large" /></Col>
                        <Col span={20}>
                          <p className="title" >Chia sẻ đôi điều với lớp học...</p>
                        </Col>
                      </Row>
                    }
                  </div>

                  {
                    posts&&posts.map(post => {
                      return (
                        <Card className="post" style={{ marginTop: 16 }} bordered={true} loading={false}>
                          <Row className="row-infor">
                            <Col span={2}><Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="large" /></Col>
                            <Col span={20}>
                              <div className="username-post">{post.userPosted.firstName + " " + post.userPosted.lastName}</div>
                              <div className="time-post">{new Date(post.createdAt).toString()}</div>
                            </Col>
                            <Col className="col-popover" span={2}>

                              <Popover placement="bottom" content={content} trigger="click">
                                <Button shape="circle" style={{ border: "none", float: 'right', textAlign: 'right' }}>
                                  <i className="fas fa-ellipsis-v" style={{ fontSize: "15px" }}></i></Button>
                              </Popover>

                            </Col>
                          </Row>
                          <Row>
                            <div className="status"> {post.content}</div>
                            {post.attachments.map(attachment => {
                              return (
                                <Col
                                  key={attachment.driveId}
                                  className="file-test" span={6}
                                  onClick={() => {
                                    FetchUtils.downloadFile('/attachments//download/' + attachment.driveId)
                                      .then((response) => response.blob())
                                      .then((blob) => {

                                        // 2. Create blob link to download
                                        const url = window.URL.createObjectURL(new Blob([blob]));
                                        const link = document.createElement('a');
                                        link.href = url;
                                        link.setAttribute('download', attachment.name);
                                        // 3. Append to html page
                                        document.body.appendChild(link);
                                        // 4. Force download
                                        link.click();
                                        // 5. Clean up and remove the link
                                        link.parentNode.removeChild(link);
                                      })
                                  }}
                                >
                                  <div className="name-file">{attachment.name}</div>
                                  <div className="description">Tải xuống</div>
                                </Col>
                              )
                            })}
                          </Row>
                        </Card>
                      )
                    })
                  }



                </Col>
              </Row>
            </TabPane>
            <TabPane tab={<span><Icon type="android" />Bài tập trên lớp</span>} key="2">
              <Exercise/>
            </TabPane>
            <TabPane tab={<span><Icon type="android" />Mọi người</span>} key="3">
              Bài tập trên lớp
            </TabPane>
          </Tabs>
        </Row>
      </CoursesLayout>
    )
  }
}

export default withRouter(CourseDetail);
