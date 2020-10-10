import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, Space, Row, Spin } from 'antd';
import { FileAddFilled } from '@ant-design/icons';
import Header from '../components/UI/Header';
import EntryBox from '../components/UI/EntryBox';

import './Entries.css';

interface Entry {
  entry: {
    resentful: string;
    selfish: string;
    dishonest: string;
    fearful: string;
    obsessing: string;
    secrets: string;
    harm: string;
    act: string;
  };
  checklist: {
    meeting: boolean;
    meditated: boolean;
    fellowship: boolean;
    literature: boolean;
    pray: boolean;
    sponsor: boolean;
    another: boolean;
    helped: boolean;
  };
  submitted: Date;
  id: string;
}

const Entries: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      setLoading(true);
      try {
        await axios
          .get('https://step-ten-server.herokuapp.com/api/entries/all')
          .then(response => {
            setEntries(response.data.entries);
          });
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchEntries();
  }, []);

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
          <Spin spinning={loading}>
            <Row gutter={[16, 16]}>
              {entries.map(ent => (
                <EntryBox date={ent.submitted} key={ent.id} id={ent.id} />
              ))}
            </Row>
          </Spin>
        </Space>
      </Layout.Content>
    </Layout>
  );
};

export default Entries;
