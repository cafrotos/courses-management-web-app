import React from 'react';
import {Col, Layout, Row, Tree} from 'antd';
import CourseItem from "./CourseItem";
import AdminLayout from "../AdminLayout/AdminLayout";
import {withRouter} from 'react-router-dom';

const DirectoryTree = Tree.DirectoryTree;
const {TreeNode} = Tree;

class Dashboard extends React.Component {
	
	render() {
		
		return (
			
			<AdminLayout>
				<Layout className="dash-board" style={{minHeight: '100vh', padding: '10px'}}>
					<Row>
						<Col span={18}>
							<Row gutter={13}>
								<Col span={8}><CourseItem/></Col>
								<Col span={8}><CourseItem/></Col>
								<Col span={8}><CourseItem/></Col>
								<Col span={8}><CourseItem/></Col>
								<Col span={8}><CourseItem/></Col>
								<Col span={8}><CourseItem/></Col>
							</Row>
						</Col>
						<Col span={4}>
							<DirectoryTree
								multiple
								defaultExpandAll
								onSelect={this.onSelect}
								onExpand={this.onExpand}
							>
								<TreeNode title="Trang chủ hệ thống" key="0-0">
									<TreeNode title="INT2205_9" key="0-0-0" isLeaf/>
									<TreeNode title="1819I-A2_MAT1099_2" key="0-0-1" isLeaf/>
								</TreeNode>
								<TreeNode title="Các khóa học của tôi" key="0-1">
									<TreeNode title="MAT1101_4_5_21" key="0-1-0" isLeaf/>
									<TreeNode title="INT2204_6" key="0-1-1" isLeaf/>
								</TreeNode>
							</DirectoryTree>
						</Col>
					</Row>
				</Layout>
			</AdminLayout>
		
		)
	}
}

export default withRouter(Dashboard);


