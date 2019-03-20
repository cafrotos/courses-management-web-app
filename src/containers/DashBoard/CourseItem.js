import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { Layout, Card, Icon, Avatar,Tree} from 'antd';
import i18n from '../../utils/i18n';
const { Meta } = Card;
const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

class CourseItem extends React.Component {
	
	render() {
		
		return (
			<Layout>
				<Card
					style={{marginBottom:10,width: 310}}
					cover={<img alt="example" src="https://courses.uet.vnu.edu.vn/pluginfile.php/10788/course/overviewfiles/anninhmang.png" />}
					actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
				>
					<Meta
						avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon="user" />}
						title="Xác suất thống kê (MAT1101_1)"
						description="Môn học cung cấp kiến thức "
					/>
				</Card>
			</Layout >
		)
	}
}

export default withRouter(CourseItem);


