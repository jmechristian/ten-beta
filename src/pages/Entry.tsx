import React from 'react';
import { Layout, Space, Row } from 'antd';
import { FileAddFilled } from '@ant-design/icons';
import Header from '../components/UI/Header';
import Question from '../components/UI/Question';

import './Entry.css';

const Entry: React.FC = () => {
  return (
    <Layout className='entries-container'>
      <Header url='/start' icon={<FileAddFilled />} />
      <Layout.Content className='entries-content'>
        <Space
          direction='vertical'
          className='full-width padding-h'
          size='large'
        >
          <div className='entry-heading'>Aug 22, Sat</div>
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Entry;
