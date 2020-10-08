import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import { Layout, Space, Spin } from 'antd';
import { FileAddFilled } from '@ant-design/icons';
import Header from '../components/UI/Header';
import Question from '../components/UI/Question';

import './Entry.css';

interface RouteParams {
  entryId: string;
}

interface Entry {
  entry: {
    resentful?: string;
    selfish?: string;
    dishonest?: string;
    fearful?: string;
    obsessing?: string;
    secrets?: string;
    harm?: string;
    act?: string;
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
  submitted: string;
}

const Entry: React.FC = () => {
  const [entry, setEntry] = useState<Entry>();
  const [loading, setLoading] = useState(false);
  const entryId = useParams<RouteParams>().entryId;

  useEffect(() => {
    const fetchEntry = async () => {
      setLoading(true);
      try {
        await axios
          .get(`https://step-ten-server.herokuapp.com/api/entries/${entryId}`)
          .then(response => {
            setEntry(response.data.entry);
          });
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };
    fetchEntry();
  }, [entryId]);

  return (
    <Layout className='entries-container'>
      <Header url='/start' icon={<FileAddFilled />} />
      <Layout.Content className='entries-content'>
        <Spin spinning={loading}>
          <Space
            direction='vertical'
            className='full-width padding-h'
            size='large'
          >
            <div className='entry-heading'>
              <Moment format='ddd, MMM DD, YY'>{entry?.submitted}</Moment>
            </div>
            <Question
              question='Was I resentful'
              answer={entry?.entry.resentful}
            />
            <Question question='Was I selfish' answer={entry?.entry.selfish} />
            <Question
              question='Was I dishonest'
              answer={entry?.entry.dishonest}
            />
            <Question question='Was I fearful' answer={entry?.entry.fearful} />
            <Question
              question='Am I obsessing over anything?'
              answer={entry?.entry.obsessing}
            />
            <Question
              question='Am I keeping any secrets?'
              answer={entry?.entry.secrets}
            />
            <Question
              question='Do I owe amends to anyone?'
              answer={entry?.entry.harm}
            />
            <Question
              question='Did I act kind towards everyone?'
              answer={entry?.entry.act}
            />
            <Question
              question='Did I go to a meeting?'
              answer={`${entry?.checklist.meeting}`}
            />
            <Question
              question='Did I meditate?'
              answer={`${entry?.checklist.meditated}`}
            />
            <Question
              question='Did I fellowship?'
              answer={`${entry?.checklist.fellowship}`}
            />
            <Question
              question='Did I read literature?'
              answer={`${entry?.checklist.literature}`}
            />
            <Question
              question='Did I pray?'
              answer={`${entry?.checklist.pray}`}
            />
            <Question
              question='Did I call my sponsor?'
              answer={`${entry?.checklist.sponsor}`}
            />
            <Question
              question='Did I talk to another alcoholic?'
              answer={`${entry?.checklist.another}`}
            />
            <Question
              question='Was I help another person?'
              answer={`${entry?.checklist.helped}`}
            />
          </Space>
        </Spin>
      </Layout.Content>
    </Layout>
  );
};

export default Entry;
