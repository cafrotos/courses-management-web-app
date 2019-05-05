import React, {Component} from 'react';
import {Row, Col, Tabs, Input, Divider,Button} from 'antd';
import {withRouter} from 'react-router-dom';
import { Segment, Icon } from 'semantic-ui-react'
import './courseDetail.less';
import CoursesLayout from '../../components/CoursesLayout';
const TabPane = Tabs.TabPane;
const {TextArea} = Input;
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

    }

    render() {
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
                                    <div className="content-post">
                                        <div className="title">Tạo bài viết</div>
                                        <div className="text-area">
                                            <TextArea placeholder="Chia sẻ với lớp học của bạn"
                                                      autosize={{minRows: 6, maxRows: 12}}/>
                                        </div>
                                        <Divider/>
                                        <Row>
                                            <Col><Icon name='upload' /></Col>
                                            <Col offset={18} span={2}><Button>Hủy</Button></Col>
                                            <Col offset={1} span={3}><Button type="primary">Đăng bài</Button></Col>
                                        </Row>
                                        <Segment inverted>
                                            <Icon color='red' name='users' />
                                            <Icon color='orange' name='users' />
                                            <Icon color='yellow' name='users' />
                                            <Icon color='olive' name='users' />
                                            <Icon color='green' name='users' />
                                            <Icon color='teal' name='users' />
                                            <Icon color='blue' name='users' />
                                            <Icon color='violet' name='users' />
                                            <Icon color='purple' name='users' />
                                            <Icon color='pink' name='users' />
                                            <Icon color='brown' name='users' />
                                            <Icon color='grey' name='users' />
                                        </Segment>
                                    </div>
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
