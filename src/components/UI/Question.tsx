import React from 'react';
import { Divider, Space } from 'antd';

import './Question.css';

const Question: React.FC = () => {
  return (
    <Space direction='vertical' size='small'>
      <div className='question'>Was I resentful?</div>
      <div className='answer'>
        This is the answer to the question. This is a good size I think, maybe a
        little smaller.
      </div>
      <Divider style={{ margin: '4px 0px' }} />
    </Space>
  );
};

export default Question;
