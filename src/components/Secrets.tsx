import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Space } from 'antd';

const Secrets: React.FC = () => {
  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Am I keeping any secrets?</div>
      <TextArea rows={10} />
    </Space>
  );
};

export default Secrets;
