import React, { useContext, useState } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import FormContext from '../data/FormContext';
import { Space, Form } from 'antd';

interface FormProps {
  onSave: (value: string, name: string) => void;
}

const Resentful: React.FC<FormProps> = props => {
  const formCtx = useContext(FormContext);

  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Was I resentful?</div>
      <TextArea
        rows={14}
        onChange={e => props.onSave('resentful', e.target.value.toString())}
        value={formCtx.entry.resentful}
        name='resentful'
      />
    </Space>
  );
};

export default Resentful;
