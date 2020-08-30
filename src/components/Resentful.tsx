import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Space } from 'antd';

const Resentful: React.FC = () => {
  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Was I resentful?</div>
      <TextArea rows={14} />
    </Space>
  );
};

export default Resentful;
