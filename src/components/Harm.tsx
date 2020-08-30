import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Space } from 'antd';

const Harm: React.FC = () => {
  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Did I own amends to anyone?</div>
      <TextArea rows={10} />
    </Space>
  );
};

export default Harm;
