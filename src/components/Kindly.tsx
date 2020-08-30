import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Space } from 'antd';

const Kindly: React.FC = () => {
  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Did I act kindly towards everyone?</div>
      <TextArea rows={10} />
    </Space>
  );
};

export default Kindly;
