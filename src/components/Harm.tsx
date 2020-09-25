import React, { useContext } from 'react';
import TextArea from 'antd/lib/input/TextArea';
import FormContext from '../data/FormContext';
import { Space } from 'antd';

interface FormProps {
  onSave: (value: string, name: string) => void;
}

const Harm: React.FC<FormProps> = props => {
  const formCtx = useContext(FormContext);
  return (
    <Space className='full-width' direction='vertical' size='large'>
      <div className='question-text'>Did I own amends to anyone?</div>
      <TextArea
        rows={10}
        onChange={e => props.onSave('harm', e.target.value.toString())}
        value={formCtx.entry.harm}
        name='harm'
      />
    </Space>
  );
};

export default Harm;
