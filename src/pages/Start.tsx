import React from 'react';
import { Layout, Row, Button, Space } from 'antd';
import { CalendarFilled } from '@ant-design/icons';
import Header from '../components/UI/Header';
import './Start.css';

const Start: React.FC = () => {
  return (
    <Layout className='start-container'>
      <Header url='/entries' icon={<CalendarFilled />} />
      <Layout.Content className='start-content padding-h'>
        <Space direction='vertical' className='full-width' size='large'>
          <Row>
            <div className='sub-text'>Step Ten</div>
          </Row>
          <Row>
            <div className='step-text'>
              Continued to take personal inventory and when we were wrong
              promptly admit it.
            </div>
          </Row>
          <Row>
            <Button type='ghost' block href='/inventory'>
              Start Inventory
            </Button>
          </Row>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Start;
