import React from 'react';
import TextArea from 'antd/lib/input/TextArea';
import { Space } from 'antd';

const Obsessing: React.FC = () => {
  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Am I obsessing over anything?</div>
      <TextArea rows={10} />
    </Space>
  );
};

export default Obsessing;
