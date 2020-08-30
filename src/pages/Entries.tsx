import React from 'react';
import { Layout, Space } from 'antd';
import { FileAddFilled } from '@ant-design/icons';
import Header from '../components/UI/Header';

import './Entries.css';

const Entries: React.FC = () => {
  return (
    <Layout className='entries-container'>
      <Header url='/start' icon={<FileAddFilled />} />
      <Layout.Content className='entries-content'>
        <Space
          direction='vertical'
          className='full-width padding-h'
          size='large'
        >
          <div className='question-text'>Entries</div>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Entries;
