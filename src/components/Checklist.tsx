import React from 'react';
import { Space } from 'antd';
import FormSwitch from './UI/FormSwitch';

const Checklist: React.FC = () => {
  return (
    <Space className='full-width' direction='vertical' size='middle'>
      <div className='question-text'>Sobriety Checklist</div>
      <FormSwitch title='Did I go to a meeting?' />
      <FormSwitch title='Did I meditate?' />
      <FormSwitch title='Did I fellowship?' />
      <FormSwitch title='Did I read literature?' />
      <FormSwitch title='Did I pray?' />
      <FormSwitch title='Did I call my sponsor?' />
      <FormSwitch title='Did I talk to another alcoholic?' />
      <FormSwitch title='Did I help another person?' />
    </Space>
  );
};

export default Checklist;
