import React from 'react';
import { Layout } from 'antd';
// import { MAIN_COLOR } from '../../Constants';
import './styles.less';
const { Footer } = Layout;
 

export default () => (
    <Footer className='footer' style={{ background:'#fff', height:60, textAlign: 'center' }}>
      System (c) 2019 by UET'Team
    </Footer>
);