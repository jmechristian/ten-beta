import React from 'react';
import { Divider, Space } from 'antd';

import './Question.css';

interface Q {
  question?: string;
  answer?: string;
}

const Question: React.FC<Q> = props => {
  return (
    <Space direction='vertical' size='small'>
      <div className='question'>{props.question}</div>
      <div className='answer'>{props.answer}</div>
      <Divider style={{ margin: '4px 0px' }} />
    </Space>
  );
};

export default Question;
