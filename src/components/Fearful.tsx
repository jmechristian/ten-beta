import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Space } from 'antd';

const Fearful: React.FC = () => {
  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Was I fearful?</div>
      <TextArea rows={10} />
    </Space>
  );
};

export default Fearful;
