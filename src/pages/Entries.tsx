import React from 'react';
import { Layout, Space, Row } from 'antd';
import { FileAddFilled } from '@ant-design/icons';
import Header from '../components/UI/Header';
import EntryBox from '../components/UI/EntryBox';

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
          <Row gutter={[16, 16]}>
            <EntryBox />
            <EntryBox />
            <EntryBox />
            <EntryBox />
            <EntryBox />
            <EntryBox />
            <EntryBox />
            <EntryBox />
            <EntryBox />
          </Row>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Entries;
