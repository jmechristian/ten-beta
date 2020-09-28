import React, { useContext } from 'react';
import { Space } from 'antd';
import FormSwitch from './UI/FormSwitch';
import FormContext from '../data/FormContext';

const Checklist: React.FC = () => {
  const formCtx = useContext(FormContext);
  return (
    <Space className='full-width' direction='vertical' size='middle'>
      <div className='question-text'>Sobriety Checklist</div>
      <FormSwitch
        title='Did I go to a meeting?'
        value='meeting'
        isChecked={formCtx.checklist.meeting}
      />
      <FormSwitch
        title='Did I meditate?'
        value='meditated'
        isChecked={formCtx.checklist.meditated}
      />
      <FormSwitch
        title='Did I fellowship?'
        value='fellowship'
        isChecked={formCtx.checklist.fellowship}
      />
      <FormSwitch
        title='Did I read literature?'
        value='literature'
        isChecked={formCtx.checklist.literature}
      />
      <FormSwitch
        title='Did I pray?'
        value='pray'
        isChecked={formCtx.checklist.pray}
      />
      <FormSwitch
        title='Did I call my sponsor?'
        value='sponsor'
        isChecked={formCtx.checklist.sponsor}
      />
      <FormSwitch
        title='Did I talk to another alcoholic?'
        value='another'
        isChecked={formCtx.checklist.another}
      />
      <FormSwitch
        title='Did I help another person?'
        value='helped'
        isChecked={formCtx.checklist.helped}
      />
    </Space>
  );
};

export default Checklist;
